import { Component, OnInit } from '@angular/core';
import { RandomArrayGeneratorService } from '../../services/random-array-generator.service';
import { SortingService } from '../../services/sorting.service';
import { SortingAlgorithms } from '../../models/algorithms.enum';
import { DataControlService } from 'src/app/services/data-control.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  arrayLength = 20;
  algorithms = [SortingAlgorithms.BubbleSort, SortingAlgorithms.QuickSort];
  showSelectAlgo = false;
  selectedAlgorithm = this.algorithms[0];
  sorting = false;

  constructor(private ragService:RandomArrayGeneratorService, private dcService:DataControlService, private sortingService:SortingService) { }

  ngOnInit(): void {
      this.generateNewArray();
      this.sortingService.isSorting.subscribe((sorting)=>{
        this.sorting = sorting;
        console.log(sorting)
      });
  }

  changeRange(event:any) {
    this.arrayLength = event.srcElement.value;
    this.generateNewArray();
  }

  generateNewArray() {
      const randomArray = this.ragService.generateNewArray(this.arrayLength);
      this.dcService.changeData(randomArray);
      this.sortingService.updateArray([1, 2]);
  }

  chnageAlog(algo:SortingAlgorithms) {
      this.selectedAlgorithm = algo;
      this.showSelectAlgo = false;
      this.sortingService.changeAlgorithm(algo);
  }


  sort() {
    if (!this.sorting){
      this.sortingService.sort();
    }
  }
}
