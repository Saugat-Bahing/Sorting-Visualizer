import { Component, OnInit } from '@angular/core';
import { DataControlService } from '../data-control.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  length:number = 20;


  constructor(private dataControlService:DataControlService) { }

  ngOnInit(): void {

  }

  getValue(event:any){
    this.length = event.srcElement.value
    this.dataControlService.leng.emit(this.length)
  }

}
