import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encomillar'
})
export class EncomillarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.toLowerCase() === 'mierda') {
      return '******';
    }
    return '\'' + value + '\'';
  }

}
