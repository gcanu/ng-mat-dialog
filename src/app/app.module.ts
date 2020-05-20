import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatDialogModule ],
  declarations: [ AppComponent, HelloComponent, ConfirmComponent ],
  entryComponents: [ConfirmComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
