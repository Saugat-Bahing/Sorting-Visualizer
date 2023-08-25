import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BubbleSortService } from './sorting-algorithms/bubble-sort.service';
import { QuickSortService } from './sorting-algorithms/quick-sort.service';

@Injectable({
    providedIn: 'root',
})
export class SortingService {
    array: BehaviorSubject<number[]> = new BehaviorSubject([0]);
    currentArray = this.array.asObservable();

    constructor(private bubbleSort:BubbleSortService, private quickSort:QuickSortService) {}

    updateArray(array: number[]) {
        this.array.next(array);
    }

    sort() {
        this.quickSort.sort();
    }
}
