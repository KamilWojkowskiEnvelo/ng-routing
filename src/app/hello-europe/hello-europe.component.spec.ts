import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloEuropeComponent } from './hello-europe.component';

describe('HelloEuropeComponent', () => {
  let component: HelloEuropeComponent;
  let fixture: ComponentFixture<HelloEuropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloEuropeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloEuropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
