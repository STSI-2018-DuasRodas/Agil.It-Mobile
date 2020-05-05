import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgilitButtonComponent } from '../agilit-button/agilit-button.component';
import { OrdercardComponent } from '../ordercard/ordercard.component';
import { OrderlistComponent } from '../orderlist/orderlist.component';
@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [    
    AgilitButtonComponent,
    OrdercardComponent,
    OrderlistComponent
  ],
  exports: [
    AgilitButtonComponent,
    OrdercardComponent,
    OrderlistComponent
  ],
  entryComponents: [
  ]
})

export class CustomComponentsModule {
  
}