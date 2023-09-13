import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    const user = { username: this.username, email: this.email, password: this.password };

    this.authService.register(user).subscribe(

      (response:any) => {
        // Handle successful registration
        console.log('Registration successful', response);
      },
      (error:any) => {
        // Handle registration error
        console.error('Registration error', error);
      }
      
    );
  }
}
