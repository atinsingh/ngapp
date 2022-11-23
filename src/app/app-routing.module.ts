import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '' , component: StudentComponent, pathMatch: 'full'},
  { path: 'about-us' , component: AboutComponent, pathMatch: 'prefix'},
  { path: 'services' , component: HomeComponent, pathMatch: 'prefix'},
  {path:'contact-us', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
