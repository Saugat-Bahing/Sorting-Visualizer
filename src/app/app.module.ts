import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BubbleSortService } from './services/sorting-algorithms/bubble-sort.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { DisplayComponent } from './modules/display/display.component';
import { HeaderComponent } from './modules/header/header.component';
import { OutClickDirective } from './directives/out-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayComponent,
    OutClickDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [BubbleSortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
