import { Injectable } from '@angular/core';
import { DataControlService } from '../data-control.service';

@Injectable({
  providedIn: 'root'
})
export class MergeSortService {

  constructor(private dataControlService:DataControlService) { }

  async sort() {
    let array = this.dataControlService.getCurrentArray();
    await this.mergeSort(array, 0, array.length-1);
  }

  async mergeSort(arr:number[], left:number, right:number) {
      if(left < right){
         const middle = Math.floor(left + ((right - left)/2));
         await this.mergeSort(arr, left, middle);
         await this.mergeSort(arr, middle+1, right);

         await this.merge(arr, left, middle, right);
      }
  }

  async merge(arr:number[], left:number, middle:number, right:number){
      let i =0, j=0, k=left;
      let lower = arr.slice(left, middle+1);
      let upper = arr.slice(middle+1, right+1);
      while(i < lower.length && j < upper.length){
          if(lower[i] <= upper[j]){
              arr[k] = lower[i];
              i++;
          }
          else {
            arr[k] = upper[j];
            j++;
          }
          k++;
          await this.sleep(5);
      }

      while(i < lower.length){
          arr[k] = lower[i];
          i++;
          k++;
          await this.sleep(5);
      }

      while(j < upper.length){
        arr[k] = upper[j];
        j++;
        k++;
        await this.sleep(5);
    }
  }

  async sleep(milliseconds:number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, milliseconds);
    });
};
}
