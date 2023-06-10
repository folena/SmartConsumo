import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparelhoDetalheComponent } from './aparelho-detalhe.component';

describe('AparelhoDetalheComponent', () => {
  let component: AparelhoDetalheComponent;
  let fixture: ComponentFixture<AparelhoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AparelhoDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AparelhoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
