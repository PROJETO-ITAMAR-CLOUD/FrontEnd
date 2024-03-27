import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoRegisterLoginComponent } from './botao-register-login.component';

describe('BotaoRegisterLoginComponent', () => {
  let component: BotaoRegisterLoginComponent;
  let fixture: ComponentFixture<BotaoRegisterLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoRegisterLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoRegisterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
