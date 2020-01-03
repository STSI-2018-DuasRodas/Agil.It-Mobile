import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignature',
  templateUrl: './assignature.page.html',
  styleUrls: ['./assignature.page.scss'],
})
export class AssignaturePage implements OnInit {

  assignatureVerificationChecked : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  assineOm(){
    console.log(this.assignatureVerificationChecked);
  }
}
