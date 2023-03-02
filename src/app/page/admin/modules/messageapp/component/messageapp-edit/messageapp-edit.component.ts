import { Component, OnInit } from '@angular/core';

import { MessageApp } from 'src/app/model/messageapp';
import { MessageAppService } from 'src/app/services/models/messageapp.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-messageapp-edit',
  templateUrl: './messageapp-edit.component.html',
  styleUrls: ['./messageapp-edit.component.css']
})
export class MessageappEditComponent implements OnInit {

  // @Input() messageapp: Messageapp

  lastEditedMessageapp = <MessageApp>{}

  editedMessageapp = <MessageApp>{}

  // currentLink: string = "/"

  constructor(private messageappService: MessageAppService, private urlService: UrlService) { 
    this.lastEditedMessageapp = this.messageappService.getLastEditedMessageApp()
    if(this.lastEditedMessageapp !== null || Object.keys(this.lastEditedMessageapp).length !== 0){
      this.messageappService.lastEditedMessageApp = <MessageApp>{}
    }
  }
  
  ngOnInit(): void {

    // this.urlService.urlChanged
    // .subscribe(
    //   (url) => {
    //     this.currentLink = url
    //   }
    // )
    
    if(this.lastEditedMessageapp !== null || Object.keys(this.lastEditedMessageapp).length !== 0){
      this.messageappService.readMessageAppOne(true, ""+this.lastEditedMessageapp.id)
        .then(
          (messageappResp) => {
            let messageapp1: MessageApp = new MessageApp()
            messageapp1.fromObject(messageappResp)
            this.editedMessageapp = messageapp1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let messageapp1: MessageApp = new MessageApp()
    messageapp1.fromObject(form.value)
    this.editedMessageapp = messageapp1
    this.messageappService.updateMessageApp(this.editedMessageapp)
  }
}

