import { Component, OnDestroy, OnInit } from '@angular/core';

// import { OtherskillService } from '../../../../service/otherskill.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { OtherSkill } from 'src/app/model/otherskill';
import { OtherSkillService } from 'src/app/services/models/otherskill.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-otherskill-list',
  templateUrl: './otherskill-list.component.html',
  styleUrls: ['./otherskill-list.component.css']
})
export class OtherskillListComponent implements OnInit, OnDestroy {

  currencies: Array<OtherSkill> = []

  otherskillSubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private otherskillService: OtherSkillService, private urlService: UrlService) { 

  }

  ngOnInit(): void {

    this.currencies = this.otherskillService.currencies

    this.otherskillSubscribe = this.otherskillService.otherSkillObserve
      .subscribe(
        (currencies) => { this.currencies = currencies},
        (error) => { this.currencies = [] }
      )
  }

  ngOnDestroy(): void {
    this.otherskillSubscribe.unsubscribe()
  }

  onEditOtherskill(otherskill: OtherSkill){
    this.otherskillService.lastEditedOtherSkill = otherskill
    this.urlService.jumpTo('/otherskill-edit')
  }

  onDeleteOtherskill(otherskill: OtherSkill){
    this.otherskillService.deleteOtherSkill(otherskill)
  }

}
