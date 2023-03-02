import { Component, OnDestroy, OnInit } from '@angular/core';

// import { MessageappService } from '../../../../service/messageapp.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessageApp } from 'src/app/model/messageapp';
import { MessageAppService } from 'src/app/services/models/messageapp.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-messageapp-list',
  templateUrl: './messageapp-list.component.html',
  styleUrls: ['./messageapp-list.component.css']
})
export class MessageappListComponent implements OnInit, OnDestroy {

  currencies: Array<MessageApp> = []

  messageappSubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private messageappService: MessageAppService, private urlService: UrlService) { 

  }

  ngOnInit(): void {

    this.currencies = this.messageappService.currencies

    this.messageappSubscribe = this.messageappService.messageAppObserve
      .subscribe(
        (currencies) => { this.currencies = currencies},
        (error) => { this.currencies = [] }
      )
  }

  ngOnDestroy(): void {
    this.messageappSubscribe.unsubscribe()
  }

  onEditMessageapp(messageapp: MessageApp){
    this.messageappService.lastEditedMessageApp = messageapp
    this.urlService.jumpTo('/messageapp-edit')
  }

  onDeleteMessageapp(messageapp: MessageApp){
    this.messageappService.deleteMessageApp(messageapp)
  }

}
