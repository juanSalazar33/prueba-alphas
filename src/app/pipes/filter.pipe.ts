import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class Filter implements PipeTransform {

  transform(i: any[], search: string): any[] {
    if (!i) return [];
    if (!search) return i;

    return i.filter(i => {
      return Object.keys(i).some(key => {
        return String(i[key]).toLowerCase().includes(search.toLowerCase());
      })
    })
  }

}
