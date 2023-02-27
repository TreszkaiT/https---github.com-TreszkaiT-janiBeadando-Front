import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './frames/page-not-found/page-not-found.component';
import { TopHeaderComponent } from './frames/top-header/top-header.component';
import { ConfigService } from './services/config.service';
import { HttpService } from './services/http.service';
import { CityService } from './services/models/city.service';
import { LanguageService } from './services/models/language.service';
import { MessageAppService } from './services/models/messageapp.service';
import { OtherSkillService } from './services/models/otherskill.service';
import { PhoneService } from './services/models/phone.service';
import { PictureService } from './services/models/picture.service';
import { ProofExperienceService } from './services/models/proofexperience.service';
import { SocialMediaService } from './services/models/socialmedia.service';
import { StudyService } from './services/models/study.service';
import { UrlService } from './services/url.service';

@NgModule({
  declarations: [AppComponent, TopHeaderComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    HttpService,
    UrlService,
    ConfigService,
    CityService,
    LanguageService,
    MessageAppService,
    OtherSkillService,
    PhoneService,
    PictureService,
    ProofExperienceService,
    SocialMediaService,
    StudyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
