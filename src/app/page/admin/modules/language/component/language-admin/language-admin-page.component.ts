import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-language-admin-page',
  templateUrl: './language-admin-page.component.html',
  styleUrls: ['./language-admin-page.component.css']
})
export class LanguageAdminPageComponent {

}
