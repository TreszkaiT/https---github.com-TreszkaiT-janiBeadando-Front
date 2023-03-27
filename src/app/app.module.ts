import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationDataModule } from './core/authentication/data/authentication-data.module';
import { AuthenticationStoreModule } from './core/authentication/store/authentication-store.module';
import { CityComponent } from './frames/content/city/city.component';
import { ContentComponent } from './frames/content/content.component';
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

// const routerSettings: Routes = [                       // itt az app.module.ts-ben nem jó a routing, mert akkor 
//   {path: '', component: ContentComponent},             // ez itt alatta minden statikusan fordul bele a coreba, és az app csak azután indul el, mikor ez a nagy mennyiségú js majd letöltődik
//   {path: "city", component: CityComponent}             // optimalizációnál (Firebase-nél) ez nagyon fontos, hogy mennyi adatot generálok
// ]

@NgModule({
  declarations: [AppComponent, TopHeaderComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AuthenticationDataModule,
    AuthenticationStoreModule,
    // RouterModule.forRoot(routerSettings)             // ez hívja meg a fentebbi root-ingot
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
    AdminPageGuard
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
