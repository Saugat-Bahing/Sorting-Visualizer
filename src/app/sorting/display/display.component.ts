import { Component, OnInit } from '@angular/core';
import { DataControlService } from '../data-control.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  data:number[]=[]
  width:number = 1/50;
  comDiv:number[] = [];
  constructor(private dataControlService:DataControlService) { }

  ngOnInit(): void {
    
    this.dataControlService.currentData.subscribe(data => this.data = data);
    this.dataControlService.leng.subscribe(length => {
      this.width = 1/length ;
    })
    this.dataControlService.currentComDiv.subscribe(data => this.comDiv = data);
  }

  highlight(i:number){
    if (i == this.comDiv[0]){
      return "comColor";
    }
    else return ""
  } 

  highlight1(i:number){

    if (i == this.comDiv[1]){
      return "comColor1";
    }
    else return ""
  }
}
