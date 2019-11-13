import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.page.html',
  styleUrls: ['./operations.page.scss'],
})
export class OperationsPage implements OnInit {
  items: any[] = [];

  constructor() {
    this.loadOperations();
  }

  ngOnInit() {
    
  }

  public loadOperations(){
      this.items.push(
        {
          name: 'Efetuando a troca do inversor'
        },
        {
          name: 'Ajustado folga no motor'
        },
        {
          name: 'Isolado fiação elétrica'
        }
      );    
  }

}
