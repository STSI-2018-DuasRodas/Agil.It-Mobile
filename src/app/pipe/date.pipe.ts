import { Pipe, PipeTransform } from '@angular/core';
import { DateHelper } from '../utils/Date';

@Pipe({name: 'agilitdate'})
export class AgilitDatePipe implements PipeTransform {
  constructor() {
  }

  transform(value : Date): string {
    return DateHelper.formatDate(value);
  }
}
