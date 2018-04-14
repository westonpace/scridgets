import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScridgetsModule } from '../scridgets/scridgets.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScridgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
