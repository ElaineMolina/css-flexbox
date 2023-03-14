import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexblogComponent } from './flexblog.component';

describe('FlexblogComponent', () => {
  let component: FlexblogComponent;
  let fixture: ComponentFixture<FlexblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
