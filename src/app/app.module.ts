import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// material moodules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

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
import { HeaderComponent } from './main/home/header/header.component';
import { CardsComponent } from './main/home/cards/cards.component';
import { DialogComponent } from './navbar/dialog/dialog.component';
import { SignInComponent } from './navbar/dialog/sign-in/sign-in.component';
import { SignUpComponent } from './navbar/dialog/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './navbar/dialog/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    HeaderComponent,
    CardsComponent,
    DialogComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    // material modules
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
