import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  standalone: true,
  providers: [MessageService],
  imports: [
    CommonModule, // ✅ Se asegura que `*ngIf` funcione
    ReactiveFormsModule,
    ButtonModule,
    ToastModule
  ]
})
export class VerifyCodeComponent implements OnInit {
  verifyForm!: FormGroup;
  token: string = '';
  loading = false;
  errorMessage: string = ''; // ✅ Agregado
  successMessage: string = ''; // ✅ Agregado

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token') || '';

    this.verifyForm = this.fb.group({
      verificationCode: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^\d{6}$/)]
      ]
    });
  }

  validarCodigo(): void {
    if (this.verifyForm.invalid) return;

    this.loading = true;
    const code = this.verifyForm.value.verificationCode;

    this.http.post('http://localhost:3000/auth/verify-code', {
      token: this.token,
      code
    }).subscribe({
      next: () => {
        this.successMessage = 'Código válido, redirigiendo...';
        this.messageService.add({ severity: 'success', summary: 'Código válido', detail: this.successMessage });
        setTimeout(() => this.router.navigate(['/auth/change-password']), 2500);
      },
      error: () => {
        this.errorMessage = 'Código incorrecto, intenta nuevamente.';
        this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage });
        alert(this.errorMessage); // ✅ Alerta añadida
        this.loading = false;
      }
    });
  }
}