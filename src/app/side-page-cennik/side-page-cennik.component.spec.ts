import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePageCennikComponent } from './side-page-cennik.component';

describe('SidePageCennikComponent', () => {
  let component: SidePageCennikComponent;
  let fixture: ComponentFixture<SidePageCennikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidePageCennikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePageCennikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
