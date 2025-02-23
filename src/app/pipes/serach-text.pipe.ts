import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachText',
  pure:false //changes when data changes
})
export class SerachTextPipe implements PipeTransform {

  transform(itemList: string[], ...args: any): string[] {
    var filterList:string[]=[]
    if(!itemList || !arguments[1]){
      return itemList
    }
    filterList=itemList.filter((temp:string):any=>{
      if(temp.includes(arguments[1])){
        return temp
      }
    })
    return filterList
  }

}
