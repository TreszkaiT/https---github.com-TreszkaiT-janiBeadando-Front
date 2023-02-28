import { Component, OnDestroy, OnInit } from '@angular/core';

// import { StudyService } from '../../../../service/study.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Study } from 'src/app/model/study';
import { StudyService } from 'src/app/services/models/study.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.css']
})
export class StudyListComponent implements OnInit, OnDestroy {

  currencies: Array<Study> = []

  studySubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private studyService: StudyService, private urlService: UrlService) { 

  }

  ngOnInit(): void {

    this.currencies = this.studyService.currencies

    this.studySubscribe = this.studyService.studyObserve
      .subscribe(
        (currencies) => { this.currencies = currencies},
        (error) => { this.currencies = [] }
      )
  }

  ngOnDestroy(): void {
    this.studySubscribe.unsubscribe()
  }

  onEditStudy(study: Study){
    this.studyService.lastEditedStudy = study
    this.urlService.jumpTo('/study-edit')
  }

  onDeleteStudy(study: Study){
    this.studyService.deleteStudy(study)
  }

}
