import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.page.html',
  styleUrls: ['./problems.page.scss'],
})
  export class ProblemsPage implements OnInit{
    items: any[] = [];
    rotateImg = 0;
    constructor() {
      for (let i = 0; i < 50; i++) {
        this.items.push({
          cause: "Descarga eletrica",
          causeInformation: "Ao ligar o disjuntor da máquina deu a descarga."
        });
  
        this.rotateImg++;
      }
    }

    ngOnInit(){
      
    }
  }  




