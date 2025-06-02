import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// PrimeNG
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ]
})
export class RegisterComponent {
  formData = {
    cedula: '',
    telefono: '',
    username: '',
    email: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {}

  onSubmit() {
    const { cedula, telefono, email, password } = this.formData;

    // Validar cédula
    if (!/^\d{10}$/.test(cedula) || !this.validarCedulaEcuatoriana(cedula)) {
      this.messageService.add({
        severity: 'error',
        summary: 'Cédula inválida',
        detail: 'La cédula debe tener 10 dígitos y ser válida en Ecuador.',
        life: 3000
      });
      return;
    }

    // Validar teléfono
    if (!/^\d{10}$/.test(telefono)) {
      this.messageService.add({
        severity: 'error',
        summary: 'Teléfono inválido',
        detail: 'El número de teléfono debe tener exactamente 10 dígitos.',
        life: 3000
      });
      return;
    }

    // Validar contraseña
    if (!this.validPassword(password)) {
      this.messageService.add({
        severity: 'error',
        summary: 'Contraseña inválida',
        detail: 'Debe tener mínimo 6 caracteres y al menos un carácter especial.',
        life: 3000
      });
      return;
    }

    // Enviar al backend
    this.http.post('http://localhost:3000/auth/register', this.formData).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: '¡Registro exitoso!',
          detail: 'Serás redirigido al login...',
          icon: 'pi pi-check-circle',
          life: 3500
        });

        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 3000);
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Ocurrió un error al registrar el usuario.',
          life: 3000
        });
      }
    });
  }

  validPassword(password: string): boolean {
    return password.length >= 6 && /[^A-Za-z0-9]/.test(password);
  }

  validarCedulaEcuatoriana(cedula: string): boolean {
    if (!/^\d{10}$/.test(cedula)) return false;

    const digits = cedula.split('').map(Number);
    const province = parseInt(cedula.substring(0, 2), 10);
    const thirdDigit = digits[2];

    if (province < 1 || province > 24 || thirdDigit >= 6) return false;

    const coef = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    const total = coef.reduce((acc, curr, idx) => {
      let res = digits[idx] * curr;
      if (res >= 10) res -= 9;
      return acc + res;
    }, 0);

    const checkDigit = (10 - (total % 10)) % 10;
    return checkDigit === digits[9];
  }
}
