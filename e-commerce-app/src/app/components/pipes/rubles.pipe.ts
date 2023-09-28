import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rubles'
})
export class RublesPipe implements PipeTransform {

  transform(value: number): string {
    if(!value){
      return value.toString();
    }else{
      return value.toFixed(2) + ' ₽';
    }
  }

}
