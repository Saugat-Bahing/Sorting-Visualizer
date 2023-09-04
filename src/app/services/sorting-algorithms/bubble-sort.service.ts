import { Injectable } from '@angular/core';
import { ColorService } from '../color.service';
import { DataControlService } from '../data-control.service';

@Injectable({
    providedIn: 'root',
})
export class BubbleSortService {
    constructor(private dataControlService: DataControlService, private colorService:ColorService) {}

    async sort() {
        let array = this.dataControlService.getCurrentArray();
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                    this.colorService.resetColors();
                    this.colorService.setColors([{index:j, color:'blur'}]);
                    if (array[j] > array[j + 1]) {
                        this.colorService.setColors([{index:j, color:'red'}, {index:j, color:'red'}]);
                        const temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                    await this.sleep(5)
                    this.dataControlService.changeData(array);
            }
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
