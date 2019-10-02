import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerActComponent } from './dealer-act.component';

describe('DealerActComponent', () => {
  let component: DealerActComponent;
  let fixture: ComponentFixture<DealerActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
