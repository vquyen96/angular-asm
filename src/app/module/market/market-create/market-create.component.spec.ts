import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketCreateComponent } from './market-create.component';

describe('MarketCreateComponent', () => {
  let component: MarketCreateComponent;
  let fixture: ComponentFixture<MarketCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
