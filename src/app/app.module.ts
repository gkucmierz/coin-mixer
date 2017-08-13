import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdCardModule } from '@angular/material';

import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';

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
    MdCardModule,
    FormsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
