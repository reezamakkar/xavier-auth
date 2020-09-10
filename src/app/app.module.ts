// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
//
// import { AppComponent } from './app.component';
// import { CallbackComponent } from './callback/callback.component';
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     CallbackComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OktaAuthService } from './auth.service';

import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    OktaAuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
