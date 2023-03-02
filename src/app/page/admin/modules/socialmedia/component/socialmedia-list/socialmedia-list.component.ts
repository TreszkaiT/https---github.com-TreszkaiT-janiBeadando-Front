import { Component, OnDestroy, OnInit } from '@angular/core';

// import { SocialmediaService } from '../../../../service/socialmedia.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SocialMedia } from 'src/app/model/socialmedia';
import { SocialMediaService } from 'src/app/services/models/socialmedia.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-socialmedia-list',
  templateUrl: './socialmedia-list.component.html',
  styleUrls: ['./socialmedia-list.component.css']
})
export class SocialmediaListComponent implements OnInit, OnDestroy {

  currencies: Array<SocialMedia> = []

  socialmediaSubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private socialmediaService: SocialMediaService, private urlService: UrlService) { 

  }

  ngOnInit(): void {

    this.currencies = this.socialmediaService.currencies

    this.socialmediaSubscribe = this.socialmediaService.socialMediaObserve
      .subscribe(
        (currencies) => { this.currencies = currencies},
        (error) => { this.currencies = [] }
      )
  }

  ngOnDestroy(): void {
    this.socialmediaSubscribe.unsubscribe()
  }

  onEditSocialmedia(socialmedia: SocialMedia){
    this.socialmediaService.lastEditedSocialMedia = socialmedia
    this.urlService.jumpTo('/socialmedia-edit')
  }

  onDeleteSocialmedia(socialmedia: SocialMedia){
    this.socialmediaService.deleteSocialMedia(socialmedia)
  }

}
