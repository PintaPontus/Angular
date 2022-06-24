import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService} from '@angular/fire/analytics';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {provideMessaging, getMessaging} from '@angular/fire/messaging';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {HomepageComponent} from './homepage/homepage.component';
import {HeaderComponent} from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomepageComponent,
        HeaderComponent,
        UserProfileComponent
    ],
    imports: [
        BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
