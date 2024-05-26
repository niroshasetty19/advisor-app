import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskSin'
})
export class MaskSinPipe implements PipeTransform {
  transform(sin: string): string {
    return sin.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');
  }
}
