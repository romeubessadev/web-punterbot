import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarAgoraComponent } from './comprar-agora.component';

describe('ComprarAgoraComponent', () => {
  let component: ComprarAgoraComponent;
  let fixture: ComponentFixture<ComprarAgoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprarAgoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarAgoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
