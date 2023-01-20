import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrayGenerationComponent } from './new-array-generation.component';

describe('NewArrayGenerationComponent', () => {
  let component: NewArrayGenerationComponent;
  let fixture: ComponentFixture<NewArrayGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArrayGenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArrayGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
