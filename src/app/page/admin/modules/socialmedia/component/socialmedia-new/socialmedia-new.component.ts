import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/models/socialmedia.service';

@Component({
  selector: 'app-socialmedia-new',
  templateUrl: './socialmedia-new.component.html',
  styleUrls: ['./socialmedia-new.component.css']
})
export class SocialmediaNewComponent implements OnInit {

  constructor(private socialmediaService: SocialMediaService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.socialmediaService.addSocialMedia(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }

}
