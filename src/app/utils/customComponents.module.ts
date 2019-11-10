import { NgModule } from '@angular/core';
import { DefaultPage } from '../home/maintenance-order/default/default.page';
import { ListPage } from '../home/maintenance-order/list/list.page';
import { RoutePage } from '../home/maintenance-order/route/route.page';
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
    DefaultPage,
    ListPage,
    RoutePage
  ],
  exports: [
    DefaultPage,
    ListPage,
    RoutePage
  ]
})

export class CustomComponentsModule {
  
}