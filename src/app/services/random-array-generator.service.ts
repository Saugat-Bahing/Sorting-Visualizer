import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomArrayGeneratorService {
  constructor() {}

  generateNewArray(range: number) {
    const randomArray = [];
    let randomNo = Math.random();
    for (let i = 0; i < range; i++) {
      randomArray.push(randomNo);
      randomNo = Math.random();
    }
    return randomArray;
  }
}
