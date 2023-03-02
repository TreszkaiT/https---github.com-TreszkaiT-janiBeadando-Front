import { Component, OnInit } from '@angular/core';
import { ProofExperienceService } from 'src/app/services/models/proofexperience.service';

@Component({
  selector: 'app-proofexperience-new',
  templateUrl: './proofexperience-new.component.html',
  styleUrls: ['./proofexperience-new.component.css']
})
export class ProofexperienceNewComponent implements OnInit {

  constructor(private proofexperienceService: ProofExperienceService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.proofexperienceService.addProofExperience(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }

}