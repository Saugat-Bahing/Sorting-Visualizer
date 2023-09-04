import { Injectable } from '@angular/core';
import { DataControlService } from '../data-control.service';
import { ColorService } from '../color.service';

@Injectable({
  providedIn: 'root'
})
export class QuickSortService {

  constructor(private dataControlService:DataControlService, private colorService:ColorService) { }

  async sort() {
    let array = this.dataControlService.getCurrentArray();
    console.log(array);
    await this.qSort(array, 0, array.length-1);
  }

  private async qSort(array: number[], low: number, high: number) {
    if (low < high) {
      let partition = await this.partition(array, low, high);
      await this.qSort(array, low, partition - 1);
      await this.qSort(array, partition, high);
    }
  }

  
  private async partition(array: number[], low: number, high: number) {
      const pivot = array[high];
      let greater = low - 1;
      for (let j = low; j < high; j++) {
          this.colorService.resetColors();
          this.colorService.setColors([{index:j, color:'blur'}, {index:high, color:'green'}, {index:greater, color:'orange'}]);
          if (array[j] <= pivot) {
            greater++;
            let swap = array[j];
            array[j] = array[greater];
            array[greater] = swap;
            this.colorService.setColors([{index:j, color:'red'}, {index:high, color:'green'}, {index:greater, color:'red'}]);
          }
        await this.sleep(5)
      }
        let swap = array[greater + 1];
        array[greater + 1] = array[high];
        array[high] = swap;
        this.colorService.resetColors();
        return greater+1;
  }

  async sleep(milliseconds:number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, milliseconds);
    });
};
}
