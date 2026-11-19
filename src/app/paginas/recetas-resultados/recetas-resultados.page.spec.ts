import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetasResultadosPage } from './recetas-resultados.page';

describe('RecetasResultadosPage', () => {
  let component: RecetasResultadosPage;
  let fixture: ComponentFixture<RecetasResultadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasResultadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
