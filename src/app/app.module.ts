import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdCardModule } from '@angular/material';

import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';

import 'hammerjs';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { StartupComponent } from './startup/startup.component';

@NgModule({
  declarations: [
    AppComponent,
    FinalizeComponent,
    StartupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // NoopAnimationsModule,
    BrowserAnimationsModule,
    // component modules
    MdCardModule,
    FormsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdSelectModule,
    RouterModule.forRoot([
      {
        path: '',
        component: StartupComponent
      },
      {
        path: 'finalize',
        component: FinalizeComponent
      }
    ])
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
