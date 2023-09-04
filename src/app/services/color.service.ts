import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ColorService {
    colors: BehaviorSubject<any[]> = new BehaviorSubject([
        { index: -1, color: 'red' },
    ]);
    currentColors = this.colors.asObservable();

    constructor() {}

    resetColors() {
        this.colors.next([]);
    }

    setColors(colors:{index:number, color:string}[]) {
        this.colors.next(colors);
    }
}
