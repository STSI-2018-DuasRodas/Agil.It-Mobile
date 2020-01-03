import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'agilittime'})
export class AgilitTimePipe implements PipeTransform {
  constructor() {
  }

  transform(value : Date): string {
    let hour   = `${value.getHours()}`;
    let minute = `${value.getMinutes()}`;

    if (value.getHours().toString().length == 1){
      hour = `0${value.getHours()}`;
    }

    if (value.getMinutes().toString().length == 1){
      minute = `0${value.getMinutes()}`;
    }
    
    return `${hour}:${minute}`;
  }
}
