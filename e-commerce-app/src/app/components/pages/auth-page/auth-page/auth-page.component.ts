import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  switchForm: boolean = true;

  constructor(
    private readonly authService: AuthService,
  ) {

  }

  public showLoginForm(): void {
    this.switchForm = true;
  }

  public showRegistrationForm(): void {
    this.switchForm = false;
  }

  public hidePassword(id: string): void {
    const password = document.getElementById(id) as HTMLInputElement;
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
}

