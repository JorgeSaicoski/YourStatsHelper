import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.model';
import { AuthService } from '@service/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      username: ["", Validators.required],
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required],
    }, { validator: this.passwordMatchValidator });
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) { 
      confirmPassword?.setErrors({ mismatch: true }); 
    } else {
      confirmPassword?.setErrors(null); 
    }
  }

  onSubmit() {
    const user = this.registerForm.value as IUser;
    console.log(this.registerForm.value)
    this.authService.register(user).subscribe(
      ()=>{
        this.router.navigate(['/home/main'])

      },
      (error) => console.log(error)
    );
  }
}