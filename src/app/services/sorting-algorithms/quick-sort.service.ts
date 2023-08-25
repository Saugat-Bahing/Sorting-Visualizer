import { Injectable } from '@angular/core';
import { DataControlService } from '../data-control.service';

@Injectable({
  providedIn: 'root'
})
export class QuickSortService {

  constructor(private dataControlService:DataControlService) { }

  sort() {
    let array = this.dataControlService.getCurrentArray();
    this.qSort(array, 0, array.length-1);
  }

  private qSort(array: number[], low: number, high: number) {
    if (low < high) {
      this.partition(array, low, high).then((res: any) => {
        let partition = res;
        this.qSort(array, low, partition - 1);
        this.qSort(array, partition, high);
      });
    } else {
      this.dataControlService.changeComDiv([-1, -1]);
    }
  }

  
  private partition(array: number[], low: number, high: number) {
    return new Promise((resolve) => {
      const pivot = array[high];
      console.log(pivot);
      let greater = low - 1;
      for (let j = low; j < high; j++) {
        setTimeout(() => {
        this.dataControlService.changeComDiv([j, high]);
          if (array[j] <= pivot) {
            greater++;
            let swap = array[j];
            array[j] = array[greater];
            array[greater] = swap;
          }
        }, 2 * j);
      }
      setTimeout(() => {
        let swap = array[greater + 1];
        array[greater + 1] = array[high];
        array[high] = swap;
        resolve(greater + 1);
      }, high * 2);
    });
  }
}
