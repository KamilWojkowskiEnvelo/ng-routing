import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloCountryComponent } from './hello-country.component';

describe('HelloCountryComponent', () => {
  let component: HelloCountryComponent;
  let fixture: ComponentFixture<HelloCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
