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
import { MessageAppService } from './services/models/messageapp.service';
import { OtherSkillComponent } from './frames/content/otherskill/otherskill.component';
import { OtherSkillService } from './services/models/otherskill.service';


import { OtherSkillNewComponent } from './frames/content/otherskill/otherskill-new/otherskill-new.component';
import { OtherSkillEditComponent } from './frames/content/otherskill/otherskill-edit/otherskill-edit.component';
import { PhoneService } from './services/models/phone.service';
import { PhoneComponent } from './frames/content/phone/phone.component';
import { PhoneNewComponent } from './frames/content/phone/phone-new/phone-new.component';
import { PhoneEditComponent } from './frames/content/phone/phone-edit/phone-edit.component';
import { PictureService } from './services/models/picture.service';
import { PictureComponent } from './frames/content/picture/picture.component';
import { PictureNewComponent } from './frames/content/picture/picture-new/picture-new.component';
import { PictureEditComponent } from './frames/content/picture/picture-edit/picture-edit.component';
import { ProofExperienceService } from './services/models/proofexperience.service';
import { ProofExperienceComponent } from './frames/content/proofexperience/proofexperience.component';
import { ProofExperienceNewComponent } from './frames/content/proofexperience/proofexperience-new/proofexperience-new.component';
import { ProofExperienceEditComponent } from './frames/content/proofexperience/proofexperience-edit/proofexperience-edit.component';
import { SocialMediaService } from './services/models/socialmedia.service';
import { SocialMediaComponent } from './frames/content/socialmedia/socialmedia.component';
import { SocialMediaNewComponent } from './frames/content/socialmedia/socialmedia-new/socialmedia-new.component';
import { SocialMediaEditComponent } from './frames/content/socialmedia/socialmedia-edit/socialmedia-edit.component';
import { StudyService } from './services/models/study.service';
import { StudyComponent } from './frames/content/study/study.component';
import { StudyNewComponent } from './frames/content/study/study-new/study-new.component';
import { StudyEditComponent } from './frames/content/study/study-edit/study-edit.component';
import { MessageAppComponent } from './frames/content/messageapp/messageapp.component';
import { MessageAppNewComponent } from './frames/content/messageapp/messageapp-new/messageapp-new.component';
import { MessageAppEditComponent } from './frames/content/messageapp/messageapp-edit/messageapp-edit.component';



const roterSettings: Routes = [
  { path: '', component: ContentComponent},
  { path: "city", component: CityComponent},
  { path: "city-new", component: CityNewComponent},
  { path: "city-edit", component: CityEditComponent},
  { path: "language", component: LanguageComponent},
  { path: "language-new", component: LanguageNewComponent},
  { path: "language-edit", component: LanguageEditComponent},  
  { path: "otherskill", component: OtherSkillComponent},
  { path: "otherskill-new", component: OtherSkillNewComponent},
  { path: "otherskill-edit", component: OtherSkillEditComponent},
  { path: "phone", component: PhoneComponent},
  { path: "phone-new", component: PhoneNewComponent},
  { path: "phone-edit", component: PhoneEditComponent},
  { path: "picture", component: PictureComponent},
  { path: "picture-new", component: PictureNewComponent},
  { path: "picture-edit", component: PictureEditComponent},  
  { path: "proofexperience", component: ProofExperienceComponent},
  { path: "proofexperience-new", component: ProofExperienceNewComponent},
  { path: "proofexperience-edit", component: ProofExperienceEditComponent},   
  { path: "socialmedia", component: SocialMediaComponent},
  { path: "socialmedia-new", component: SocialMediaNewComponent},
  { path: "socialmedia-edit", component: SocialMediaEditComponent},   
  { path: "study", component: StudyComponent},
  { path: "study-new", component: StudyNewComponent},
  { path: "study-edit", component: StudyEditComponent},      
  { path: "messageapp", component: MessageAppComponent},
  { path: "messageapp-new", component: MessageAppNewComponent},
  { path: "messageapp-edit", component: MessageAppEditComponent},
  {
		path: 'registration',
		loadChildren: () =>
			import('./page/registration/registration-page.module').then(
				(module) => module.RegistrationPageModule
			),
	},
  {
		path: 'login',
		loadChildren: () =>
			import('./page/login/login-page.module').then(
				(module) => module.LoginPageModule
			),
	}, 
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
    LanguageNewComponent,
    OtherSkillComponent,
    OtherSkillNewComponent,
    OtherSkillEditComponent,
    PhoneComponent,
    PhoneNewComponent,
    PhoneEditComponent,
    PictureComponent,
    PictureNewComponent,
    PictureEditComponent,
    ProofExperienceComponent,
    ProofExperienceNewComponent,
    ProofExperienceEditComponent,
    SocialMediaComponent,
    SocialMediaNewComponent,
    SocialMediaEditComponent,
    StudyComponent,
    StudyNewComponent,
    StudyEditComponent,
    MessageAppComponent,
    MessageAppNewComponent,
    MessageAppEditComponent
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
    LanguageService,
    MessageAppService,
    OtherSkillService,
    PhoneService,
    PictureService,
    ProofExperienceService,
    SocialMediaService,
    StudyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
