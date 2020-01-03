import { Component, OnInit, Input, Injectable } from '@angular/core';

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

  constructor() { }

  ngOnInit() {}

}
