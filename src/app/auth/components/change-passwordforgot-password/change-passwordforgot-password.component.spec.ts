import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordforgotPasswordComponent } from './change-passwordforgot-password.component';

describe('ChangePasswordforgotPasswordComponent', () => {
  let component: ChangePasswordforgotPasswordComponent;
  let fixture: ComponentFixture<ChangePasswordforgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangePasswordforgotPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordforgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
