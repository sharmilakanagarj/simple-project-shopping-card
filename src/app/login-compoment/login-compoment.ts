import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-compoment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-compoment.html',
  styleUrls: ['./login-compoment.css'],
})
export class LoginCompoment {

  formBuilder = inject(FormBuilder);
  router = inject(Router);

  loginProfile = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]

  })

  submitForm(){
    this.router.navigate(['/products']);

  }
}
