import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasComponent } from './noticias.component';

describe('noticiasComponent', () => {
  let component: NoticiasComponent;
  let fixture: ComponentFixture<NoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
