import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var date = value.toString();
    var yyyy = date.slice(0,4);
    var mm = date.slice(4,6);
    var dd = date.slice(6,8);
    return mm + "/" + dd + "/" + yyyy;
  }

}
