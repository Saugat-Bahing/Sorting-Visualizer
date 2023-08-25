import { Injectable } from '@angular/core';
import { ColorService } from '../color.service';
import { DataControlService } from '../data-control.service';

@Injectable({
    providedIn: 'root',
})
export class BubbleSortService {
    constructor(private dataControlService: DataControlService, private colorService:ColorService) {}

    sort() {
        let array = this.dataControlService.getCurrentArray();
        let timeout = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                timeout += 1;
                setTimeout(() => {
                    this.colorService.resetColors();
                    this.colorService.addColors([j], 'blue');
                    if (array[j] > array[j + 1]) {
                      console.log("color")
                        this.colorService.addColors([j, j+1], 'red');
                        const temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                    // console.log(array);
                    this.dataControlService.changeData(array);
                }, 5*timeout);
            }
        }
    }

    // bubbleSort() {
    //   this.length = this.data.length
    //   this.high = this.length;
    //   for (let i = 0; i < this.length; i++) {

    //     setTimeout(() => {

    //       this.getMinimum(this.data, this.high);
    //     }, 2 * this.length * i);
    //   }
    //   setTimeout(() => {
    //     this.dataControlService.changeComDiv([])
    //   }, 2 * this.data.length **2 + 10);
    // }

    // getMinimum(arr: number[], high:number) {

    //   for (let i = 0; i < high; i++) {

    //     setTimeout(() => {

    //       this.dataControlService.changeComDiv([i])
    //       if (arr[i] > arr[i + 1]) {

    //         this.dummydata = arr[i + 1];
    //         arr[i + 1] = arr[i];
    //         arr[i] = this.dummydata;
    //         this.dataControlService.changeComDiv([i, i])
    //       }
    //     }, 2 * i);
    //   }
    //   this.high -= 1;
    // }
}
