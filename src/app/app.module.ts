
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { EducationComponent } from './education/education.component';
import { ResearchComponent } from './research/research.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ExtraCircularActivitiesComponent } from './extra-circular-activities/extra-circular-activities.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    EducationComponent,
    ResearchComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    CertificationsComponent,
    ExtraCircularActivitiesComponent,
    ContactComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
