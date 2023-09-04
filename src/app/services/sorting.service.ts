import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BubbleSortService } from './sorting-algorithms/bubble-sort.service';
import { QuickSortService } from './sorting-algorithms/quick-sort.service';
import { SortingAlgorithms } from '../models/algorithms.enum';
import { MergeSortService } from './sorting-algorithms/merge-sort.service';
import { SelectionSortService } from './sorting-algorithms/selection-sort.service';

@Injectable({
    providedIn: 'root',
})
export class SortingService {
    array: BehaviorSubject<number[]> = new BehaviorSubject([0]);
    currentArray = this.array.asObservable();
    algorithm: BehaviorSubject<any> = new BehaviorSubject(
        SortingAlgorithms.BubbleSort
    );
    currentAlgorithm = this.algorithm.asObservable();
    sorting: BehaviorSubject<any> = new BehaviorSubject(false);
    isSorting = this.sorting.asObservable();

    constructor(
        private bubbleSort: BubbleSortService,
        private quickSort: QuickSortService,
        private mergeSort: MergeSortService,
        private selectionSort: SelectionSortService
    ) {}

    updateArray(array: number[]) {
        this.array.next(array);
    }

    changeAlgorithm(algo: SortingAlgorithms) {
        this.algorithm.next(algo);
    }

    async sort() {
        this.currentAlgorithm
            .subscribe((algo: SortingAlgorithms) => {
                this.sorting.next(true);
                switch (algo) {
                    case SortingAlgorithms.BubbleSort: {
                        this.bubbleSort.sort().then(() => {
                            this.sorting.next(false);
                        });
                        break;
                    }
                    case SortingAlgorithms.SelectionSort: {
                        this.selectionSort.sort().then(() => {
                            this.sorting.next(false);
                        });
                        break;
                    }
                    case SortingAlgorithms.QuickSort: {
                        this.quickSort.sort().then(() => {
                            this.sorting.next(false);
                        });
                        break;
                    }
                    case SortingAlgorithms.MergeSort: {
                        this.mergeSort.sort().then(() => {
                            this.sorting.next(false);
                        });
                        break;
                    }
                }
            })
            .unsubscribe();
    }
}
