import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexDirectionComponent } from './flex-direction.component';

describe('FlexDirectionComponent', () => {
  let component: FlexDirectionComponent;
  let fixture: ComponentFixture<FlexDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexDirectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
