import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaibaMaisIndividualComponent } from './saiba-mais-individual.component';

describe('SaibaMaisIndividualComponent', () => {
  let component: SaibaMaisIndividualComponent;
  let fixture: ComponentFixture<SaibaMaisIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaibaMaisIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaibaMaisIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
