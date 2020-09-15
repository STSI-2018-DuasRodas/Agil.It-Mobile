import { Component, OnInit, Input, Injectable, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'agilit-button',
  templateUrl: './agilit-button.component.html',
  styleUrls: ['./agilit-button.component.scss'],
})
@Injectable()
export class AgilitButtonComponent implements OnInit {
  @Input()  color    : string  = "primary";
  @Input()  size     : string  = "default";
  @Input()  expand   : string  = "";
  @Input()  disabled : boolean = false;
  @Output() onClick  : any = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  onButtonClick(){
    if (this.disabled){
      return;
    }

    this.onClick.emit();
  }

}
