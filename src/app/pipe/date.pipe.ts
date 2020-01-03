import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'agilitdate'})
export class AgilitDatePipe implements PipeTransform {
  constructor() {
  }

  transform(value : Date): string {
    let date = `${value.getDate()}`;
    
    if (value.getDate().toString().length == 1){
      date = `0${value.getDate()}`;
    }

    return `${date}/${value.getMonth() + 1}/${value.getFullYear()}`;
  }
}
