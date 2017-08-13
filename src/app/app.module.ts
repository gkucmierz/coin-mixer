import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // NoopAnimationsModule,
    BrowserAnimationsModule,
    // component modules
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
