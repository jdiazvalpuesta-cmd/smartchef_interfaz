import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocinarPage } from './cocinar.page';

describe('CocinarPage', () => {
  let component: CocinarPage;
  let fixture: ComponentFixture<CocinarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CocinarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
