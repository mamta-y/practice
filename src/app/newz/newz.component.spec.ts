import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewzComponent } from './newz.component';

describe('NewzComponent', () => {
  let component: NewzComponent;
  let fixture: ComponentFixture<NewzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
