import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appOutClick]'
})
export class OutClickDirective {

  private eleRef!:ElementRef;
  @Output() outClick:EventEmitter<boolean> = new EventEmitter();
  @HostListener('window:click', ['$event'])
  click(event:any){
      console.log(event);
      if (!this.eleRef.nativeElement.contains(event.target)) {
        this.outClick.emit(true);
      }
  }
  constructor(private elementRef:ElementRef) { 
    this.eleRef = elementRef;
  }

}
