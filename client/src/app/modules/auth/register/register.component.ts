import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { User } from '@model/user.model';
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
    const user = this.registerForm.value as User;
    this.authService.register(user).subscribe(
      (response: any)=>{
        console.log(response)
      },
      (error) => console.log(error)
    );
  }
}