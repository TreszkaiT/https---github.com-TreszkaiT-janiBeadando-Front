import { Injectable } from '@angular/core';
import { City } from '../../model/city';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  public cityObserve: Subject<any> = new Subject()

  currencies: Array<City> = []

  cityUrl: string = ''

  lastEditedCity = <City>{}

  constructor(private http: HttpClient, private httpService: HttpService, private config: ConfigService) { 
    this.cityUrl = this.config.get('apiUrl') + "/city"                            // ez itt a server mappán belül lévő /city.json fájl neve/helye !!!!!!!!!!
    this.getCityWithObserver()                                                        // már betöltéskor értesüljenek más Components-ek a változásról
  }

  getCityWithObserver() {
    this.http.get(this.cityUrl + "/all")
      .subscribe(
        (response) => {
          this.currencies = this.jsonToCity(response)
          this.cityObserve.next(this.currencies)                                      // Component értesítése/frissítése itt történik 
        },
        (error) => {
          this.cityObserve.error("Error in Observe")
        }
      )
  }

  jsonToCity(cityArray: any): City[] {
    let currencies1: Array<City> = []
    
    for(let city of cityArray){
      let newCity = new City()
      newCity.fromObject(city)
      currencies1.push(newCity)
    }    
    return currencies1
  }

  addCity(city: City){
    return new Promise( (resolve, reject) => {
      this.httpService.create(`${this.cityUrl}`, city)
        .then(
          (response) => {
            this.getCityWithObserver()
            resolve('City add')
          }
        )
    })
  }

  updateCity(city: City){
    return new Promise( (resolve, reject) => {
      this.httpService.update(`${this.cityUrl}/${city.id}`, city)
        .then(
          (response) => { 
            this.getCityWithObserver() 
            resolve('City updated')
          }
        )
    })
  }

  deleteCity(city: City){
    return new Promise( (resolve, reject) => {
      this.httpService.delete(`${this.cityUrl}/${city.id}`)
        .then(
          (response) => { 
            this.getCityWithObserver() 
            resolve('City deleted')
          }
        )
    })
  }

  readCityOne(one: boolean, id?: string){
    let urls: string = ""
    if(one) urls = this.cityUrl + "/" + id
    else urls = this.cityUrl + "/all"

    return new Promise( (resolve, reject) => {
      this.httpService.read(urls)
        .then(
          (response) => {
            this.getCityWithObserver()
            resolve(response)
          }
        )
    })
  }

  getLastEditedCity(){
    return this.lastEditedCity
  }

}
