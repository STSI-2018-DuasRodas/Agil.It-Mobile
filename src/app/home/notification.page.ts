import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  public notifications : any = this.createNotificationObject();
  
  constructor() { }

  ngOnInit() {
  }

  createNotificationObject(){
    return [
      {
        title       : 'Reabertura',
        description : 'Sua ordem de manutenção 0007356/DGF45 foi reaberta.',
        data        : 'Hoje 18:23',
        icon        : 'refresh'
      },
      {
        title       : 'Concluída',
        description : 'Sua ordem de manutenção 0007356/DWS20 foi concluída com sucesso.',
        data        : 'Hoje 14:24',
        icon        : 'checkmark'
      },
      {
        title       : 'Parada',
        description : 'Sua ordem de manutenção 0007356/DWS20 esta parada.',
        data        : 'Hoje 11:41',
        icon        : 'hand'
      },
      {
        title       : 'Convite',
        description : 'Marcelo te convidou para resolver a ordem 462512/DW45.',
        data        : 'Hoje 10:20',
        icon        : 'people'
      }
    ]

  }

}
