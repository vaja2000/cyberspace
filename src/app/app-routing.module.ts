import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { ServicesComponent } from './main/services/services.component';
import { UserPageComponent } from './main/user-page/user-page.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'services', component:ServicesComponent },
  { path: 'about-us', component:AboutUsComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'user-page', component:UserPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
