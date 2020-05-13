import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgilitButtonComponent } from '../agilit-button/agilit-button.component';
import { OrdercardComponent } from '../ordercard/ordercard.component';
import { OrderlistComponent } from '../orderlist/orderlist.component';
import { AgilitTimePipe } from '../pipe/time.pipe';
import { AgilitDatePipe } from '../pipe/date.pipe';
@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [    
    AgilitButtonComponent,
    OrdercardComponent,
    OrderlistComponent,
    AgilitDatePipe, 
    AgilitTimePipe
  ],
  exports: [
    AgilitButtonComponent,
    OrdercardComponent,
    OrderlistComponent,
    AgilitDatePipe, 
    AgilitTimePipe
  ],
  entryComponents: [
  ]
})

export class CustomComponentsModule {
  
}