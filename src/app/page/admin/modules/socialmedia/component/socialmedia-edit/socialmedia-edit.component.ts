import { Component, OnInit } from '@angular/core';

import { SocialMedia } from 'src/app/model/socialmedia';
import { SocialMediaService } from 'src/app/services/models/socialmedia.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-socialmedia-edit',
  templateUrl: './socialmedia-edit.component.html',
  styleUrls: ['./socialmedia-edit.component.css']
})
export class SocialmediaEditComponent implements OnInit {

  // @Input() socialmedia: Socialmedia

  lastEditedSocialmedia = <SocialMedia>{}

  editedSocialmedia = <SocialMedia>{}

  // currentLink: string = "/"

  constructor(private socialmediaService: SocialMediaService, private urlService: UrlService) { 
    this.lastEditedSocialmedia = this.socialmediaService.getLastEditedSocialMedia()
    if(this.lastEditedSocialmedia !== null || Object.keys(this.lastEditedSocialmedia).length !== 0){
      this.socialmediaService.lastEditedSocialMedia = <SocialMedia>{}
    }
  }
  
  ngOnInit(): void {

    // this.urlService.urlChanged
    // .subscribe(
    //   (url) => {
    //     this.currentLink = url
    //   }
    // )
    
    if(this.lastEditedSocialmedia !== null || Object.keys(this.lastEditedSocialmedia).length !== 0){
      this.socialmediaService.readSocialMediaOne(true, ""+this.lastEditedSocialmedia.id)
        .then(
          (socialmediaResp) => {
            let socialmedia1: SocialMedia = new SocialMedia()
            socialmedia1.fromObject(socialmediaResp)
            this.editedSocialmedia = socialmedia1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let socialmedia1: SocialMedia = new SocialMedia()
    socialmedia1.fromObject(form.value)
    this.editedSocialmedia = socialmedia1
    this.socialmediaService.updateSocialMedia(this.editedSocialmedia)
  }
}
