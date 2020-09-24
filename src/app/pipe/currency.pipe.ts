import { Pipe, PipeTransform } from '@angular/core';
import { AgilitUtils } from '../utils/agilitUtils';

@Pipe({name: 'vpcurrency'})
export class VpCurrencyPipe implements PipeTransform {
 vpReflectClassName = 'VpCurrencyPipe';

  constructor() {
  }

  transform(value: number, places: string = '2'): string {
    let newValue = 0;

    if (value !== undefined && value !== null) {
      newValue = value;
    }

    return AgilitUtils.formatNumber(newValue, Number(places));
  }
}
