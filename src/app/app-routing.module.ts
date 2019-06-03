import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExtraCircularActivitiesComponent } from './extra-circular-activities/extra-circular-activities.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchComponent } from './research/research.component';

const routes: Routes = [
  
  {path: 'workExperience' , component: WorkExperienceComponent},
  {path: 'research' , component: ResearchComponent},
  {path: 'projects' , component: ProjectsComponent},
  {path: 'profile' , component: ProfileComponent},
  {path: 'extraCircular' , component: ExtraCircularActivitiesComponent},
  {path: 'education' , component: EducationComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'certifications' , component: CertificationsComponent},
  { path: '**', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
