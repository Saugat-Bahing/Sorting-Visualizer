import { Component, OnInit } from '@angular/core';
import { DataControlService } from '../data-control.service';

@Component({
  selector: 'app-new-array-generation',
  templateUrl: './new-array-generation.component.html',
  styleUrls: ['./new-array-generation.component.css']
})
export class NewArrayGenerationComponent implements OnInit {

  data:number[] = [];
  randomNo:number = 0;
  arrayLength = 20;

  changeData(length:number=this.arrayLength) {
    this.dataControlService.changeData(this.generateNewArray(length));
  }

  constructor( private dataControlService:DataControlService) { 
  }


  ngOnInit(): void {
    this.dataControlService.currentData.subscribe(data => this.data = data);
    this.changeData(50)
    this.dataControlService.leng.subscribe(data =>{
        this.changeData(data);
        this.arrayLength = data;
    })
  }

  
  
  generateNewArray(arrayLength:number){
      this.data = []
      this.randomNo = Math.random()
      console.log("len",this.arrayLength)
      for (let i=0; i<arrayLength; i++){
        this.data.push(this.randomNo);
        this.randomNo = Math.random()
      }
      
      return this.data
  }


}
