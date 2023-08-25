import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { DataControlService } from 'src/app/services/data-control.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  data:number[]=[]
  width:number = 1/50;
  comDiv:number[] = [];
  divColors:any[] = [];
  constructor(private dataControlService:DataControlService, private colorService:ColorService) { }

  ngOnInit(): void {
    
    this.dataControlService.currentData.subscribe(data => this.data = data);
    this.dataControlService.leng.subscribe(length => {
      this.width = 1/length ;
    })
    this.colorService.currentColors.subscribe((colors) => {
        this.divColors = colors;
        // console.log(this.divColors);
    })
    this.dataControlService.currentComDiv.subscribe(data => this.comDiv = data);
  }

  getColor(index:number) {
      const filteredDiv = this.divColors.filter((e)=> e.index == index);
      if (filteredDiv.length > 0){
          // console.log(filteredDiv[0].color)
          return filteredDiv[0].color;
      }
      return '#65068a';
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
