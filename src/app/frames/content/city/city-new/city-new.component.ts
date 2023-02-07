import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/models/city.service';

@Component({
  selector: 'app-city-new',
  templateUrl: './city-new.component.html',
  styleUrls: ['./city-new.component.css']
})
export class CityNewComponent implements OnInit {

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.cityService.addCity(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }

}
