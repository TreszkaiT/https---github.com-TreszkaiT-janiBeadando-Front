import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-messageapp-admin-page',
  templateUrl: './messageapp-admin-page.component.html',
  styleUrls: ['./messageapp-admin-page.component.css']
})
export class MessageappAdminPageComponent {

}
