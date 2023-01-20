import { Component, OnInit } from '@angular/core';
import { DataControlService } from '../data-control.service';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit {

  data: number[] = []
  length: number = 0;
  dummydata: number = 0;
  sortedArray: number[] = [];
  comDiv: number[] = [];
  high = 0;
  constructor(private dataControlService: DataControlService) { }


  ngOnInit(): void {
    this.dataControlService.currentData.subscribe(data => this.data = data);
    this.dataControlService.currentComDiv.subscribe(data => this.comDiv = data);
  }


  bubbleSort() {
    this.length = this.data.length
    this.high = this.length;
    for (let i = 0; i < this.length; i++) {

      setTimeout(() => {

        this.getMinimum(this.data, this.high);
      }, 2 * this.length * i);
    }
    setTimeout(() => {
      this.dataControlService.changeComDiv([])
    }, 2 * this.data.length **2 + 10);
  }



  getMinimum(arr: number[], high:number) {

    for (let i = 0; i < high; i++) {

      setTimeout(() => {

        this.dataControlService.changeComDiv([i])
        if (arr[i] > arr[i + 1]) {

          this.dummydata = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = this.dummydata;
          this.dataControlService.changeComDiv([i, i])
        }
      }, 2 * i);
    }
    this.high -= 1;
  }

}