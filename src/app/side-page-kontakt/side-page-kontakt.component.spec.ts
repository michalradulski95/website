import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePageKontaktComponent } from './side-page-kontakt.component';

describe('SidePageKontaktComponent', () => {
  let component: SidePageKontaktComponent;
  let fixture: ComponentFixture<SidePageKontaktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidePageKontaktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePageKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
