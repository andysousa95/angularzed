import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ModalProductComponent } from './modal-product/modal-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule } from '@angular/material/input';
import {AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    ModalProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyAqP-vCrZjUazxU0pTeLxBfXDnixtZb1sk",
    authDomain: "angular-crud-753.firebaseapp.com",
    databaseURL: "https://angular-crud-753.firebaseio.com",
    projectId: "angular-crud-753",
    storageBucket: "angular-crud-753.appspot.com",
    messagingSenderId: "321599638084",
    appId: "1:321599638084:web:4acaab0b7d209c9abdca11"
  }),
  AngularFireDatabaseModule
  ],
  entryComponents: [
    ModalProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
