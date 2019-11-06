import { NgModule } from '@angular/core';
import { DefaultComponent } from '../maintenance-order/default/default.component';
import { ListComponent } from '../maintenance-order/list/list.component';
import { RouteComponent } from '../maintenance-order/route/route.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [    
    DefaultComponent,
    ListComponent,
    RouteComponent
  ],
  exports: [
    DefaultComponent,
    ListComponent,
    RouteComponent
  ]
})

export class ComponentsModule {
  
}