import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataControlService {
    sortingArray: number[] = [];
    arrayLength: number = 50;
    comDiv: number[] = [];

    private dataSource = new BehaviorSubject(this.sortingArray);
    private comparingDiv = new BehaviorSubject(this.comDiv);
    leng = new EventEmitter<number>();

    currentData = this.dataSource.asObservable();
    currentComDiv = this.comparingDiv.asObservable();

    changeData(data: any) {
        this.dataSource.next(data);
    }

    changeComDiv(data: any) {
        this.comparingDiv.next(data);
    }

    getCurrentArray() {
        let array: number[] = [];
        this.currentData
            .subscribe((arr) => {
                array = arr;
            })
            .unsubscribe();
        return array;
    }

    constructor() {}
}
