import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAuteursComponent } from './liste-auteurs.component';

describe('ListeAuteursComponent', () => {
  let component: ListeAuteursComponent;
  let fixture: ComponentFixture<ListeAuteursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeAuteursComponent]
    });
    fixture = TestBed.createComponent(ListeAuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
