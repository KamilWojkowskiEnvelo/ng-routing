import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloCountryDetailsComponent } from './hello-country-details.component';

describe('HelloCountryDetailsComponent', () => {
  let component: HelloCountryDetailsComponent;
  let fixture: ComponentFixture<HelloCountryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloCountryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloCountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
