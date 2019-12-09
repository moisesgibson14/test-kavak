import { Pipe, PipeTransform } from '@angular/core';

const toTitleCase = (value) => {
  return value.substring(0, 1).toUpperCase() + value.substring(1);
};
@Pipe({
  name: 'capitalize'
})
export class CapitalizeTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value){
      return  value.split(' ').map(toTitleCase).join(' ');;
    }
  }

}
