import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// material moodules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FoooterComponent } from './foooter/foooter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchDirective } from './directives/search.directive';
import { HomeComponent } from './main/home/home.component';
import { ServicesComponent } from './main/services/services.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { ContactComponent } from './main/contact/contact.component';
import { UserPageComponent } from './main/user-page/user-page.component';
import { CarouselComponent } from './main/home/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FoooterComponent,
    SearchDirective,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactComponent,
    UserPageComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // material modules
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
