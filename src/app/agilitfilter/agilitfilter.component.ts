import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-agilitfilter',
  templateUrl: './agilitfilter.component.html',
  styleUrls: ['./agilitfilter.component.scss'],
})
export class AgilitfilterComponent implements OnInit {
  @Input() data : any;

  public filters : any = this.createFilterObject();

  constructor(private popoverController : PopoverController) { }

  ngOnInit() {
    console.log(this.data);
  }

  createFilterObject(){
    return {
      initialDate: new Date(),
      finalDate: new Date(),
      status: '',
      priority: '',
      orderType: ''
    }
  }

  confirmFilters(){
    this.popoverController.dismiss({'dismissed': true, filters: this.filters});
  }

  cancelFilters(){
    this.popoverController.dismiss({'dismissed': false});
  }

  clearFilters(){

  }

}
