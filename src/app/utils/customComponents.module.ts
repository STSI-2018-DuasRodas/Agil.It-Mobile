import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgilitButtonComponent } from '../agilit-button/agilit-button.component';
@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [    
    AgilitButtonComponent
  ],
  exports: [
    AgilitButtonComponent
  ],
  entryComponents: [
  ]
})

export class CustomComponentsModule {
  
}