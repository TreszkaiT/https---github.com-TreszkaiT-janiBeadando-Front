import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';
import { HttpService } from './services/http.service';
import { UrlService } from './services/url.service';
import { TopHeaderComponent } from './frames/top-header/top-header.component';
import { LeftSidebarComponent } from './frames/left-sidebar/left-sidebar.component';
import { ContentComponent } from './frames/content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './frames/content/city/city.component';
import { CityNewComponent } from './frames/content/city/city-new/city-new.component';
import { CityEditComponent } from './frames/content/city/city-edit/city-edit.component';
import { CityService } from './services/models/city.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './frames/page-not-found/page-not-found.component';
import { LanguageService } from './services/models/language.service';
import { LanguageComponent } from './frames/content/language/language.component';
import { LanguageEditComponent } from './frames/content/language/language-edit/language-edit.component';
import { LanguageNewComponent } from './frames/content/language/language-new/language-new.component';

const roterSettings: Routes = [
  { path: '', component: ContentComponent},
  { path: "city", component: CityComponent},
  { path: "city-new", component: CityNewComponent},
  { path: "city-edit", component: CityEditComponent},
  { path: "language", component: LanguageComponent},
  { path: "language-new", component: LanguageNewComponent},
  { path: "language-edit", component: LanguageEditComponent},
  // { path: "szamla", component: SzamlaComponent},
  // { path: "szamla-new", component: SzamlaNewComponent},
  // { path: "szamla-edit", component: SzamlaEditComponent},
  { path: '**', component: PageNotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    LeftSidebarComponent,
    ContentComponent,
    CityComponent,
    CityNewComponent,
    CityEditComponent,
    PageNotFoundComponent,
    LanguageComponent,
    LanguageEditComponent,
    LanguageNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(roterSettings)
  ],
  providers: [
    HttpService,
    UrlService,
    ConfigService,
    CityService,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
