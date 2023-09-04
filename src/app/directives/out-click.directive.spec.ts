import { ElementRef } from '@angular/core';
import { OutClickDirective } from './out-click.directive';
import { TestBed } from '@angular/core/testing';

const mockElementRef: ElementRef = {
  nativeElement: {
    offsetWidth: 100
  }
};

describe('OutClickDirective', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [{provide:ElementRef, useValue: mockElementRef}]
      })
  })
  it('should create an instance', () => {
    const directive = new OutClickDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
