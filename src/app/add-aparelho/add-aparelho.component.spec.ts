import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAparelhoComponent } from './add-aparelho.component';

describe('AddAparelhoComponent', () => {
  let component: AddAparelhoComponent;
  let fixture: ComponentFixture<AddAparelhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAparelhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAparelhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
