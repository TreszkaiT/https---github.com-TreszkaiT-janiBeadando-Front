import { Component, OnDestroy, OnInit } from '@angular/core';

// import { PhoneService } from '../../../../service/phone.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Phone } from 'src/app/model/phone';
import { PhoneService } from 'src/app/services/models/phone.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit, OnDestroy {

  currencies: Array<Phone> = []

  phoneSubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private phoneService: PhoneService, private urlService: UrlService) { 

  }

  ngOnInit(): void {

    this.currencies = this.phoneService.currencies

    this.phoneSubscribe = this.phoneService.phoneObserve
      .subscribe(
        (currencies) => { this.currencies = currencies},
        (error) => { this.currencies = [] }
      )
  }

  ngOnDestroy(): void {
    this.phoneSubscribe.unsubscribe()
  }

  onEditPhone(phone: Phone){
    this.phoneService.lastEditedPhone = phone
    this.urlService.jumpTo('/phone-edit')
  }

  onDeletePhone(phone: Phone){
    this.phoneService.deletePhone(phone)
  }

}
