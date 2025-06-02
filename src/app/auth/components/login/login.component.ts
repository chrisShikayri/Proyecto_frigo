import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Servicios
import { AuthService } from '../../../servicios/auth.service';
import { UserService } from '../../../servicios/user.service';
import { MessageService } from 'primeng/api';

// PrimeNG Módulos
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DropdownModule,
    ToastModule,
    HttpClientModule 
  ]
})
export class LoginComponent {
  errorLogin = false;
  notRegistered = false;
  forgotPasswordEmail = '';
  isForgotPasswordVisible = false;

  roles = [
    { label: 'Cliente', value: 'cliente' },
    { label: 'Administrador', value: 'admin' }
  ];

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rol: new FormControl(null, Validators.required)
  });

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    private userService: UserService
  ) {console.log('HttpClient inyectado');}

  validPassword(password: string): boolean {
    return password.length >= 6 && /[^A-Za-z0-9]/.test(password);
  }

  funIngresar() {
    const email = this.loginForm.get('email')?.value ?? '';
    const password = this.loginForm.get('password')?.value ?? '';
    //const rol = this.loginForm.get('rol')?.value;

    if (!email.includes('@')) {
      this.messageService.add({ severity: 'warn', summary: 'Correo inválido', detail: 'Debe contener @' });
      return;
    }

    if (!this.validPassword(password)) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Contraseña inválida',
        detail: 'Debe tener mínimo 6 caracteres y un carácter especial.'
      });
      return;
    }

    /*if (!rol) {
      this.messageService.add({ severity: 'warn', summary: 'Rol requerido', detail: 'Selecciona un rol válido.' });
      return;
    }*/

    // Si pasa todas las validaciones, llama al servicio de login
    this.authService.loginConNest(this.loginForm.value).subscribe({
      next: (res: any) => {
        localStorage.setItem('access_token', res.token);
        this.userService.setUser(res.user);
        this.messageService.add({
          severity: 'success',
          summary: '¡Bienvenido!',
          detail: 'Redirigiendo...',
          life: 2500
        });
        // Al cabo de 2.5s, navega a /admin-materiales
        setTimeout(() => this.router.navigate(['/admin-materiales']), 2500);
      },
      error: (err) => {
        if (err?.error?.message === 'Debes registrarte para poder ingresar') {
          this.notRegistered = true;
          setTimeout(() => this.router.navigate(['/auth/register']), 4000);
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Credenciales inválidas' });
        }
      }
    });
  }

  onForgotPassword(): void {
    this.isForgotPasswordVisible = true;
  }

  onSendRecoveryCode() {
    const email = this.forgotPasswordEmail;

    if (!this.validEmail(email)) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Correo inválido',
        detail: 'Ingresa un correo válido.',
        life: 3000
      });
      return;
    }

    this.authService.enviarPasswordPorCorreo(email).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Correo enviado',
          detail: `Código enviado a ${email}`,
          life: 4000
        });
        this.isForgotPasswordVisible = false;
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo enviar el código.',
          life: 4000
        });
      }
    });
  }

  validEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
