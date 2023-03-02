import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/model/city';
import { CityService } from 'src/app/services/models/city.service';
import { UrlService } from 'src/app/services/url.service';


@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {

  // @Input() city: City

  lastEditedCity = <City>{}

  editedCity = <City>{}

  // currentLink: string = "/"

  constructor(private cityService: CityService, private urlService: UrlService) { 
    this.lastEditedCity = this.cityService.getLastEditedCity()
    if(this.lastEditedCity !== null || Object.keys(this.lastEditedCity).length !== 0){
      this.cityService.lastEditedCity = <City>{}
    }
  }
  
  ngOnInit(): void {

    // this.urlService.urlChanged
    // .subscribe(
    //   (url) => {
    //     this.currentLink = url
    //   }
    // )
    
    if(this.lastEditedCity !== null || Object.keys(this.lastEditedCity).length !== 0){
      this.cityService.readCityOne(true, ""+this.lastEditedCity.id)
        .then(
          (cityResp) => {
            let city1: City = new City()
            city1.fromObject(cityResp)
            this.editedCity = city1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let city1: City = new City()
    city1.fromObject(form.value)
    this.editedCity = city1
    this.cityService.updateCity(this.editedCity)
  }
}
