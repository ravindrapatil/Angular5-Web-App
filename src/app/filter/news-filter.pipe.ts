import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {
  transform(mainData: any[], searchText: string): any {
    if (!mainData) {
      return [];
    }
    if (searchText === undefined) {
      return mainData;
    }

    return mainData.filter( news => {
      return news.description.toLowerCase().includes(searchText.toLocaleLowerCase());
    });
  }

}
