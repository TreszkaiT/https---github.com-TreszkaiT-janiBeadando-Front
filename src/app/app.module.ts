import { environment } from 'src/environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationDataModule } from './core/authentication/data/authentication-data.module';
import { AuthenticationStoreModule } from './core/authentication/store/authentication-store.module';
import { PageNotFoundComponent } from './frames/page-not-found/page-not-found.component';
import { TopHeaderComponent } from './frames/top-header/top-header.component';
import { AdminPageGuard } from './page/admin/guard';
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
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, TopHeaderComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AuthenticationDataModule,
    AuthenticationStoreModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
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
    AdminPageGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
