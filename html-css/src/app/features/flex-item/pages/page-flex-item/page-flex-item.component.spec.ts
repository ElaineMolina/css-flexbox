import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFlexItemComponent } from './page-flex-item.component';

describe('PageFlexItemComponent', () => {
  let component: PageFlexItemComponent;
  let fixture: ComponentFixture<PageFlexItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFlexItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFlexItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
