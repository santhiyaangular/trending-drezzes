import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenListitemComponent } from './women-listitem.component';

describe('WomenListitemComponent', () => {
  let component: WomenListitemComponent;
  let fixture: ComponentFixture<WomenListitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenListitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
