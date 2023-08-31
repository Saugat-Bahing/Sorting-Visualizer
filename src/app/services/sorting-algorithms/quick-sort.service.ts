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
    await this.qSort(array, 0, array.length-1);
  }

  private async qSort(array: number[], low: number, high: number) {
    if (low < high) {
      let partition = await this.partition(array, low, high);
      console.log(partition, 's');
      await this.qSort(array, low, partition - 1);
      await this.qSort(array, partition, high);
    } else {
      this.dataControlService.changeComDiv([-1, -1]);
    }
  }

  
  private async partition(array: number[], low: number, high: number) {
      this.colorService.resetColors();
      const pivot = array[high];
      this.colorService.addColors([pivot], 'green');
      console.log(pivot);
      let greater = low - 1;
      this.colorService.addColors([greater], 'orange')
      for (let j = low; j < high; j++) {
          this.colorService.addColors([j], 'blue');
          if (array[j] <= pivot) {
            greater++;
            let swap = array[j];
            array[j] = array[greater];
            array[greater] = swap;
            this.colorService.addColors([j], 'red')
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
