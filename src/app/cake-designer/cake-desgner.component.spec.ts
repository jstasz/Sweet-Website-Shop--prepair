import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDesgnerComponent } from './cake-desgner.component';

describe('CakeDesgnerComponent', () => {
  let component: CakeDesgnerComponent;
  let fixture: ComponentFixture<CakeDesgnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeDesgnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeDesgnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
