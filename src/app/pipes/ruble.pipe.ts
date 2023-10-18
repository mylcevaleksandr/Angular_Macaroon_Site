import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ruble'
})
export class RublePipe implements PipeTransform {

  transform(value: number|string,suffix: string[]): string {
    return value.toString()+' '+ suffix;
  }

}
