import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetesComponent } from './componentes.component';

describe('ComponentesComponent', () => {
  let component: ComponetesComponent;
  let fixture: ComponentFixture<ComponetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
