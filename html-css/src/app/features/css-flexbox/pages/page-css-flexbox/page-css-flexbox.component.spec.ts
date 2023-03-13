import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCssFlexboxComponent } from './page-css-flexbox.component';

describe('PageCssFlexboxComponent', () => {
  let component: PageCssFlexboxComponent;
  let fixture: ComponentFixture<PageCssFlexboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCssFlexboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCssFlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
