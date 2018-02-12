import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesMsgComponent } from './heroes-msg.component';

describe('HeroesMsgComponent', () => {
  let component: HeroesMsgComponent;
  let fixture: ComponentFixture<HeroesMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
