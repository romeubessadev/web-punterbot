import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaSenhaComponent } from './solicita-senha.component';

describe('SolicitaSenhaComponent', () => {
  let component: SolicitaSenhaComponent;
  let fixture: ComponentFixture<SolicitaSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitaSenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
