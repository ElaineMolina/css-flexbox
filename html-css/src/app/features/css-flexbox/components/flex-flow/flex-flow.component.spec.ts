import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexFlowComponent } from './flex-flow.component';

describe('FlexFlowComponent', () => {
  let component: FlexFlowComponent;
  let fixture: ComponentFixture<FlexFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
