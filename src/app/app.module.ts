import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBY3ucOB22ImybuDkUdSguxY39HTISUkdU",
  authDomain: "app-tareas-7170b.firebaseapp.com",
  projectId: "app-tareas-7170b",
  storageBucket: "app-tareas-7170b.appspot.com",
  messagingSenderId: "928390913997",
  appId: "1:928390913997:web:a972bb81770400d3246e84"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp (firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
