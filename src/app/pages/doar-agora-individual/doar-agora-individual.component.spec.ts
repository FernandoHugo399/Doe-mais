import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoarAgoraIndividualComponent } from './doar-agora-individual.component';

describe('DoarAgoraIndividualComponent', () => {
  let component: DoarAgoraIndividualComponent;
  let fixture: ComponentFixture<DoarAgoraIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoarAgoraIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoarAgoraIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
