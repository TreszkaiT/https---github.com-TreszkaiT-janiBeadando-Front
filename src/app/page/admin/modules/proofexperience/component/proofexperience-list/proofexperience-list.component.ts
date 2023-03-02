import { Component, OnDestroy, OnInit } from '@angular/core';

// import { ProofexperienceService } from '../../../../service/proofexperience.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ProofExperience } from 'src/app/model/proofexperience';
import { ProofExperienceService } from 'src/app/services/models/proofexperience.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-proofexperience-list',
  templateUrl: './proofexperience-list.component.html',
  styleUrls: ['./proofexperience-list.component.css']
})
export class ProofexperienceListComponent implements OnInit, OnDestroy {

  currencies: Array<ProofExperience> = []

  proofexperienceSubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private proofexperienceService: ProofExperienceService, private urlService: UrlService) { 

  }

  ngOnInit(): void {

    this.currencies = this.proofexperienceService.currencies

    this.proofexperienceSubscribe = this.proofexperienceService.proofExperienceObserve
      .subscribe(
        (currencies) => { this.currencies = currencies},
        (error) => { this.currencies = [] }
      )
  }

  ngOnDestroy(): void {
    this.proofexperienceSubscribe.unsubscribe()
  }

  onEditProofexperience(proofexperience: ProofExperience){
    this.proofexperienceService.lastEditedProofExperience = proofexperience
    this.urlService.jumpTo('/proofexperience-edit')
  }

  onDeleteProofexperience(proofexperience: ProofExperience){
    this.proofexperienceService.deleteProofExperience(proofexperience)
  }

}