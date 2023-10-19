import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'
})
export class TrimTextPipe implements PipeTransform {

  transform(text: string, limit:number): string {
    let trimmedText=''
    if (text.length>limit){
      trimmedText=text.substring(0,limit)
    }else {
      return text
    }
    return trimmedText+' ...'
  }

}
