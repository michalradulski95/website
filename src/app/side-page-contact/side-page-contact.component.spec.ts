import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePageContactComponent } from './side-page-contact.component';

describe('SidePageContactComponent', () => {
  let component: SidePageContactComponent;
  let fixture: ComponentFixture<SidePageContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidePageContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePageContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
