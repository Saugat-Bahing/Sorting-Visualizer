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

    addColors(indexes: number[], color: string) {
        let colors: any[] = [];
        this.currentColors
            .subscribe((colors) => {
                colors = colors;
            })
            .unsubscribe();

        indexes.forEach((no) => {
            colors = colors.filter((c) => c.index != no);
            colors.push({ index: no, color: color });
        });
        this.colors.next(colors);
    }
}
