import { Pipe, PipeTransform } from '@angular/core';
import toString from 'lodash-es/toString';

@Pipe({
  name: 'simplePile'
})
export class SimplePilePipe implements PipeTransform {

  transform(value: any, args1: number, args2: number, args3: string): any {
    const m = args1 + args2;
    return args3 + toString(m);
  }

}
