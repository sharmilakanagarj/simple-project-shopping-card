import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-compoment',
  imports: [ReactiveFormsModule],
  templateUrl: './login-compoment.html',
  styleUrl: './login-compoment.css',
})
export class LoginCompoment {

  formBulider = inject(FormBuilder);
  router = inject(Router);

  loginProfile = this.formBulider.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.minLength(6)]

  })

  submitForm(){
    this.router.navigate(['/products']);

  }
}
