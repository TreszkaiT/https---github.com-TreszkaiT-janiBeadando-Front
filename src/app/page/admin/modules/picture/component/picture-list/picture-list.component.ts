import { Component, OnDestroy, OnInit } from '@angular/core';

// import { PictureService } from '../../../../service/picture.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Picture } from 'src/app/model/picture';
import { PictureService } from 'src/app/services/models/picture.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit, OnDestroy {

  currencies: Array<Picture> = []

  pictureSubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private pictureService: PictureService, private urlService: UrlService) { 

  }

  ngOnInit(): void {

    this.currencies = this.pictureService.currencies

    this.pictureSubscribe = this.pictureService.pictureObserve
      .subscribe(
        (currencies) => { this.currencies = currencies},
        (error) => { this.currencies = [] }
      )
  }

  ngOnDestroy(): void {
    this.pictureSubscribe.unsubscribe()
  }

  onEditPicture(picture: Picture){
    this.pictureService.lastEditedPicture = picture
    this.urlService.jumpTo('/picture-edit')
  }

  onDeletePicture(picture: Picture){
    this.pictureService.deletePicture(picture)
  }

}