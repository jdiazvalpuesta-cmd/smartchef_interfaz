import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiEspacioPage } from './mi-espacio.page';

describe('MiEspacioPage', () => {
  let component: MiEspacioPage;
  let fixture: ComponentFixture<MiEspacioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiEspacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
