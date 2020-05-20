import { Component, VERSION } from '@angular/core';
import {ConfirmComponent} from './confirm/confirm.component'
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  dialogRef: MatDialogRef<ConfirmComponent>

  constructor(
    private dialog: MatDialog
  ) {}

  open(options) {
    this.dialogRef = this.dialog.open(ConfirmComponent, {    
         data: {
           title: options.title,
           message: options.message,
           cancelText: options.cancelText,
           confirmText: options.confirmText
         }
    }); 
  }
}
