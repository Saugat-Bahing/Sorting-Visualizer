import { Injectable } from '@angular/core';
import { DataControlService } from '../data-control.service';
import { ColorService } from '../color.service';

@Injectable({
  providedIn: 'root'
})
export class SelectionSortService {

  constructor(private dataControlService:DataControlService, private colorService:ColorService) { }

  async sort() {
    let array = this.dataControlService.getCurrentArray();
    for (let i = 0; i < array.length-1; i++) {
        let minInd = i;
        for (let j = i + 1; j < array.length; j++) {
                this.colorService.setColors([{index:j, color:'blue'}, {index:minInd, color:'orange'}]);
                if (array[j] < array[minInd]) {
                    const temp = j;
                    j = minInd
                    minInd = temp;
                    this.colorService.setColors([{index:j, color:'red'}, {index:minInd, color:'red'}]);
                }
                await this.sleep(5)
                this.dataControlService.changeData(array);
        }
        this.colorService.setColors([{index:i, color:'red'}, {index:minInd, color:'red'}]);
        const temp = array[minInd];
        array[minInd] = array[i];
        array[i] = temp;
    }
    this.colorService.resetColors();
};

async sleep(milliseconds:number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, milliseconds);
    });
};
}
