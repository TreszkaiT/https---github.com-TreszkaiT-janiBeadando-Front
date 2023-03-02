import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-picture-admin-page',
  templateUrl: './picture-admin-page.component.html',
  styleUrls: ['./picture-admin-page.component.css']
})
export class PictureAdminPageComponent {

}
