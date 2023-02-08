import { Injectable } from '@angular/core';
import { Messageapp } from '../../model/messageapp';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class MessageappService {

  public messageappObserve: Subject<any> = new Subject()

  currencies: Array<Messageapp> = []

  messageappUrl: string = ''

  lastEditedMessageapp = <Messageapp>{}

  constructor(private http: HttpClient, private httpService: HttpService, private config: ConfigService) { 
    this.messageappUrl = this.config.get('apiUrl') + "/messageapp"                            // ez itt a server mappán belül lévő /messageapp.json fájl neve/helye !!!!!!!!!!
    this.getMessageappWithObserver()                                                        // már betöltéskor értesüljenek más Components-ek a változásról
  }

  getMessageappWithObserver() {
    this.http.get(this.messageappUrl + "/all")
      .subscribe(
        (response) => {
          this.currencies = this.jsonToMessageapp(response)
          this.messageappObserve.next(this.currencies)                                      // Component értesítése/frissítése itt történik 
        },
        (error) => {
          this.messageappObserve.error("Error in Observe")
        }
      )
  }

  jsonToMessageapp(messageappArray: any): Messageapp[] {
    let currencies1: Array<Messageapp> = []
    
    for(let messageapp of messageappArray){
      let newMessageapp = new Messageapp()
      newMessageapp.fromObject(messageapp)
      currencies1.push(newMessageapp)
    }    
    return currencies1
  }

  addMessageapp(messageapp: Messageapp){
    return new Promise( (resolve, reject) => {
      this.httpService.create(`${this.messageappUrl}`, messageapp)
        .then(
          (response) => {
            this.getMessageappWithObserver()
            resolve('Messageapp add')
          }
        )
    })
  }

  updateMessageapp(messageapp: Messageapp){
    return new Promise( (resolve, reject) => {
      this.httpService.update(`${this.messageappUrl}/${messageapp.id}`, messageapp)
        .then(
          (response) => { 
            this.getMessageappWithObserver() 
            resolve('Messageapp updated')
          }
        )
    })
  }

  deleteMessageapp(messageapp: Messageapp){
    return new Promise( (resolve, reject) => {
      this.httpService.delete(`${this.messageappUrl}/${messageapp.id}`)
        .then(
          (response) => { 
            this.getMessageappWithObserver() 
            resolve('Messageapp deleted')
          }
        )
    })
  }

  readMessageappOne(one: boolean, id?: string){
    let urls: string = ""
    if(one) urls = this.messageappUrl + "/" + id
    else urls = this.messageappUrl + "/all"

    return new Promise( (resolve, reject) => {
      this.httpService.read(urls)
        .then(
          (response) => {
            this.getMessageappWithObserver()
            resolve(response)
          }
        )
    })
  }

  getLastEditedMessageapp(){
    return this.lastEditedMessageapp
  }

}
