import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@service/auth/auth.service';
import { UsersService } from '@service/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    public authService:AuthService,
    private router: Router
  ) {}

  ngOnInit():void{
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit():void{

    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(() => {
      this.router.navigate(['/home/main']);
    });

  }

}
