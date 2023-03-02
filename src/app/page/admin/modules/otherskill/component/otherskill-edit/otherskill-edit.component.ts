import { Component, OnInit } from '@angular/core';

import { OtherSkill } from 'src/app/model/otherskill';
import { OtherSkillService } from 'src/app/services/models/otherskill.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-otherskill-edit',
  templateUrl: './otherskill-edit.component.html',
  styleUrls: ['./otherskill-edit.component.css']
})
export class OtherskillEditComponent implements OnInit {

  // @Input() otherskill: OtherSkill

  lastEditedOtherSkill = <OtherSkill>{}

  editedOtherskill = <OtherSkill>{}

  // currentLink: string = "/"

  constructor(private otherskillService: OtherSkillService, private urlService: UrlService) { 
    this.lastEditedOtherSkill = this.otherskillService.getLastEditedOtherSkill()
    if(this.lastEditedOtherSkill !== null || Object.keys(this.lastEditedOtherSkill).length !== 0){
      this.otherskillService.lastEditedOtherSkill = <OtherSkill>{}
    }
  }
  
  ngOnInit(): void {

    // this.urlService.urlChanged
    // .subscribe(
    //   (url) => {
    //     this.currentLink = url
    //   }
    // )
    
    if(this.lastEditedOtherSkill !== null || Object.keys(this.lastEditedOtherSkill).length !== 0){
      this.otherskillService.readOtherSkillOne(true, ""+this.lastEditedOtherSkill.id)
        .then(
          (otherskillResp) => {
            let otherskill1: OtherSkill = new OtherSkill()
            otherskill1.fromObject(otherskillResp)
            this.editedOtherskill = otherskill1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let otherskill1: OtherSkill = new OtherSkill()
    otherskill1.fromObject(form.value)
    this.editedOtherskill = otherskill1
    this.otherskillService.updateOtherSkill(this.editedOtherskill)
  }
}
