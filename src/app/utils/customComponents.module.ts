import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgilitButtonComponent } from '../agilit-button/agilit-button.component';
import { OrdercardComponent } from '../ordercard/ordercard.component';
import { OrderlistComponent } from '../orderlist/orderlist.component';
import { AgilitTimePipe } from '../pipe/time.pipe';
import { AgilitDatePipe } from '../pipe/date.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { CadOperationComponent } from '../cad-operation/cad-operation.component';
import { ChecklistComponent } from '../checklist/checklist.component';
import { AgilitfilterComponent } from '../agilitfilter/agilitfilter.component';
@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    IonicModule,
    IonicModule.forRoot()
  ],
  declarations: [    
    AgilitButtonComponent,
    OrdercardComponent,
    OrderlistComponent,
    AgilitDatePipe, 
    AgilitTimePipe,
    CadOperationComponent,
    ChecklistComponent,
    AgilitfilterComponent
  ],
  exports: [
    AgilitButtonComponent,
    OrdercardComponent,
    OrderlistComponent,
    AgilitDatePipe, 
    AgilitTimePipe,
    CadOperationComponent,
    ChecklistComponent,
    AgilitfilterComponent
  ],
  entryComponents: [
    CadOperationComponent, 
    ChecklistComponent, 
    AgilitfilterComponent
  ]
})

export class CustomComponentsModule {
  
}