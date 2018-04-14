import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components';


@NgModule({
  declarations: [
      components.CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      components.CardComponent
  ],
  providers: [],
  bootstrap: []
})
export class ScridgetsModule { }
