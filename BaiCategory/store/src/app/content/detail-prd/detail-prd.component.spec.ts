import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPRDComponent } from './detail-prd.component';

describe('DetailPRDComponent', () => {
  let component: DetailPRDComponent;
  let fixture: ComponentFixture<DetailPRDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPRDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPRDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
