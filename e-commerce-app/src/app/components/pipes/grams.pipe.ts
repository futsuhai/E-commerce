import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grams'
})
export class GramsPipe implements PipeTransform {

  transform(value: number | undefined): string {
   if(!value){
    return "0 г"
   }else{
    return value + ' г'
   }
  }

}
