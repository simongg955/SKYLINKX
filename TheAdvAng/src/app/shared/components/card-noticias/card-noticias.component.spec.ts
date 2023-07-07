import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardnoticiasComponent } from './card-noticias.component';

describe('CardnoticiasComponent', () => {
  let component: CardnoticiasComponent;
  let fixture: ComponentFixture<CardnoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardnoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardnoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
