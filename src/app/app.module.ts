import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

// material moodules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FoooterComponent } from './foooter/foooter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './main/home/home.component';
import { ServicesComponent } from './main/services/services.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { ContactComponent } from './main/contact/contact.component';
import { HeaderComponent } from './main/home/header/header.component';
import { CardsComponent } from './main/home/cards/cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RateComponent } from './main/home/rate/rate.component';
import { DetailsComponent } from './main/services/details/details.component';
import { AlertComponent } from './main/services/details/alert/alert.component';
import { NavbarScrollDirective } from './directives/navbar-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FoooterComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactComponent,
    HeaderComponent,
    CardsComponent,
    RateComponent,
    DetailsComponent,
    AlertComponent,
    NavbarScrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    // material modules
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatDialogModule,
    MatInputModule,
    MatStepperModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
