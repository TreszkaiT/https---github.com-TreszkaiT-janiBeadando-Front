import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-city-admin-page',
  templateUrl: './city-admin-page.component.html',
  styleUrls: ['./city-admin-page.component.scss'],
})
export class CityAdminPageComponent {}
