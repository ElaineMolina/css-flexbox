import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignSelfComponent } from './align-self.component';

describe('AlignSelfComponent', () => {
  let component: AlignSelfComponent;
  let fixture: ComponentFixture<AlignSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignSelfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
