import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EndpointListComponent } from './endpoint-list/endpoint-list.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './admin/login/login.component';
import { TemperatureDisplayComponent } from './temperature-display/temperature-display.component';
import { Routes, RouterModule } from '@angular/router';

const config = {
    apiKey: 'AIzaSyBnS-BF5y2vYygQbNcXFCuerUhUbDnmono',
    authDomain: 'triggers-f3f16.firebaseapp.com',
    databaseURL: 'https://triggers-f3f16.firebaseio.com',
    projectId: 'triggers-f3f16',
    storageBucket: 'triggers-f3f16.appspot.com',
    messagingSenderId: '1071515946160',
    appId: '1:1071515946160:web:d69722805f3a1f0e'
};

const routes: Routes = [
  // { path: 'temp', component: HeroesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EndpointListComponent,
    LoginComponent,
    TemperatureDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
