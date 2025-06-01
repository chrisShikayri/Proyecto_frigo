import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  providers: [MessageService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;
  recoveryCode: number | null = null;

  constructor(private fb: FormBuilder, private messageService: MessageService, private router: Router) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  sendRecoveryCode() {
    if (this.forgotForm.invalid) return;

    const email = this.forgotForm.value.email;
    this.recoveryCode = Math.floor(100000 + Math.random() * 900000); // Código aleatorio de 6 dígitos

    // Muestra un mensaje de éxito
    this.messageService.add({
      severity: 'success',
      summary: 'Código enviado',
      detail: `Código de verificación enviado a ${email} (Código: ${this.recoveryCode})`,
    });

    // Simula el envío y redirige a la pantalla de verificación
    setTimeout(() => {
      this.router.navigate(['/auth/verify-code']);
    }, 2500);
  }
}