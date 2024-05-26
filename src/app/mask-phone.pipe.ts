import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPhone'
})
export class MaskPhonePipe implements PipeTransform {
  transform(phone: string): string {
    return phone.replace(/(\d{4})(\d{4})/, '$1-$2');
  }
}
