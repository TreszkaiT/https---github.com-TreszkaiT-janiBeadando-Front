import { Component, OnInit } from '@angular/core';
import { OtherSkillService } from 'src/app/services/models/otherskill.service';

@Component({
  selector: 'app-otherskill-new',
  templateUrl: './otherskill-new.component.html',
  styleUrls: ['./otherskill-new.component.css']
})
export class OtherskillNewComponent implements OnInit {

  constructor(private otherskillService: OtherSkillService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.otherskillService.addOtherSkill(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }

}
