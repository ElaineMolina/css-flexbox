import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFlexblogComponent } from './page-flexblog.component';

describe('PageFlexblogComponent', () => {
  let component: PageFlexblogComponent;
  let fixture: ComponentFixture<PageFlexblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFlexblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFlexblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
