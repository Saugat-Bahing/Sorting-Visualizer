import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { NewArrayGenerationComponent } from './new-array-generation/new-array-generation.component';
import { SliderComponent } from './slider/slider.component';
import { QsortComponent } from './qsort/qsort.component';



@NgModule({
  declarations: [
    DisplayComponent,
    BubbleSortComponent,
    NewArrayGenerationComponent,
    SliderComponent,
    QsortComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NewArrayGenerationComponent,
            BubbleSortComponent,
            DisplayComponent,
            SliderComponent,
            QsortComponent
          ]
})

export class SortingModule { }
