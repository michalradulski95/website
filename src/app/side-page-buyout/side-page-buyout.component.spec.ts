import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePageBuyoutComponent } from './side-page-buyout.component';

describe('SidePageBuyoutComponent', () => {
  let component: SidePageBuyoutComponent;
  let fixture: ComponentFixture<SidePageBuyoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidePageBuyoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePageBuyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
