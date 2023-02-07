import { Component, OnDestroy, OnInit } from '@angular/core';
import { City } from '../../../model/city';
// import { CityService } from '../../../../service/city.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CityService } from 'src/app/services/models/city.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit, OnDestroy {

  currencies: Array<City> = []

  citySubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private cityService: CityService, private urlService: UrlService) { 

  }

  ngOnInit(): void {

    this.currencies = this.cityService.currencies

    this.citySubscribe = this.cityService.cityObserve
      .subscribe(
        (currencies) => { this.currencies = currencies},
        (error) => { this.currencies = [] }
      )
  }

  ngOnDestroy(): void {
    this.citySubscribe.unsubscribe()
  }

  onEditCity(city: City){
    this.cityService.lastEditedCity = city
    this.urlService.jumpTo('/city-edit')
  }

  onDeleteCity(city: City){
    this.cityService.deleteCity(city)
  }

}
