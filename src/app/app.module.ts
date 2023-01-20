import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewArrayGenerationComponent } from './sorting/new-array-generation/new-array-generation.component';
import { SortingModule } from './sorting/sorting.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SortingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
