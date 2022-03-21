import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloCountryFormComponent } from './hello-country-form.component';

describe('HelloCountryFormComponent', () => {
  let component: HelloCountryFormComponent;
  let fixture: ComponentFixture<HelloCountryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloCountryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloCountryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
