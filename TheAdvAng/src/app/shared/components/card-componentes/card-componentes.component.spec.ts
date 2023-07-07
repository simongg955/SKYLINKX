import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponentesComponent } from './card-componentes.component';

describe('CardComponentesComponent', () => {
  let component: CardComponentesComponent;
  let fixture: ComponentFixture<CardComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
