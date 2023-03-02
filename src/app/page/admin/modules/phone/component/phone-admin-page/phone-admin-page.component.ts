import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-phone-admin-page',
  templateUrl: './phone-admin-page.component.html',
  styleUrls: ['./phone-admin-page.component.css']
})
export class PhoneAdminPageComponent {

}
