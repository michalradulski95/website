import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePagePricelistComponent } from './side-page-pricelist.component';

describe('SidePagePricelistComponent', () => {
  let component: SidePagePricelistComponent;
  let fixture: ComponentFixture<SidePagePricelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidePagePricelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePagePricelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
