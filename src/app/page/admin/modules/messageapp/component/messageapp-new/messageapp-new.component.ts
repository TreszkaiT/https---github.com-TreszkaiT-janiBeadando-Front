import { Component, OnInit } from '@angular/core';
import { MessageAppService } from 'src/app/services/models/messageapp.service';

@Component({
  selector: 'app-messageapp-new',
  templateUrl: './messageapp-new.component.html',
  styleUrls: ['./messageapp-new.component.css']
})
export class MessageappNewComponent implements OnInit {

  constructor(private messageappService: MessageAppService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.messageappService.addMessageApp(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }

}