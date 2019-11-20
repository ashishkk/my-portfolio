import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'education', component: EducationComponent },
  {path: 'work', component: WorkComponent },
  {path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
