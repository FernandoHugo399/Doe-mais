import { ContactService } from 'src/app/services/contact/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContateNosComponent } from './contate-nos.component';

describe('ContateNosComponent', () => {
  let component: ContateNosComponent;
  let fixture: ComponentFixture<ContateNosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContateNosComponent ],
      imports: [HttpClientModule],
      providers: [ContactService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContateNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
