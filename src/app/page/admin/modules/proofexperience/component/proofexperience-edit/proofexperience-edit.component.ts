import { Component, OnInit } from '@angular/core';

import { ProofExperience } from 'src/app/model/proofexperience';
import { ProofExperienceService } from 'src/app/services/models/proofexperience.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-proofexperience-edit',
  templateUrl: './proofexperience-edit.component.html',
  styleUrls: ['./proofexperience-edit.component.css']
})
export class ProofexperienceEditComponent implements OnInit {

  // @Input() proofexperience: Proofexperience

  lastEditedProofexperience = <ProofExperience>{}

  editedProofexperience = <ProofExperience>{}

  // currentLink: string = "/"

  constructor(private proofexperienceService: ProofExperienceService, private urlService: UrlService) { 
    this.lastEditedProofexperience = this.proofexperienceService.getLastEditedProofExperience()
    if(this.lastEditedProofexperience !== null || Object.keys(this.lastEditedProofexperience).length !== 0){
      this.proofexperienceService.lastEditedProofExperience = <ProofExperience>{}
    }
  }
  
  ngOnInit(): void {

    // this.urlService.urlChanged
    // .subscribe(
    //   (url) => {
    //     this.currentLink = url
    //   }
    // )
    
    if(this.lastEditedProofexperience !== null || Object.keys(this.lastEditedProofexperience).length !== 0){
      this.proofexperienceService.readProofExperienceOne(true, ""+this.lastEditedProofexperience.id)
        .then(
          (proofexperienceResp) => {
            let proofexperience1: ProofExperience = new ProofExperience()
            proofexperience1.fromObject(proofexperienceResp)
            this.editedProofexperience = proofexperience1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let proofexperience1: ProofExperience = new ProofExperience()
    proofexperience1.fromObject(form.value)
    this.editedProofexperience = proofexperience1
    this.proofexperienceService.updateProofExperience(this.editedProofexperience)
  }
}
