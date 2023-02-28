import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-study-admin-page',
  templateUrl: './study-admin-page.component.html',
  styleUrls: ['./study-admin-page.component.css']
})
export class StudyAdminPageComponent {

}
