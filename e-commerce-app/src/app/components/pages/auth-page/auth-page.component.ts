import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/components/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {

  public switchForm: boolean = true;
  public regForm!: FormGroup;
  public loginForm!: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required, Validators.minLength(4), Validators.maxLength(12)],
      password: ['', Validators.required]
    });

    this.regForm = this.formBuilder.group({
      login: ['', Validators.required, Validators.minLength(4), Validators.maxLength(12)],
      email: ['', Validators.email],
      password: ['', Validators.required],
      passConfirm: ['', Validators.required]
    });
  }

  public async submitLoginForm(): Promise<void> {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      const loginedUser: User = new User({
        id: Guid.create().toString(),
        login: formValue.login,
        password: formValue.password,
      });
      await this.authService.login(loginedUser);
      this.loginForm.reset();
    }
  }

  public async submitRegisterFrom(): Promise<void> {
    if (this.regForm.valid) {
      const formValue = this.regForm.value;
      const newUser: User = new User({
        id: Guid.create().toString(),
        login: formValue.login,
        email: formValue.email,
        password: formValue.password
      });
      await this.authService.register(newUser);
      this.regForm.reset();
    }
  }

  public showLoginForm(): void {
    this.switchForm = true;
  }

  public showRegistrationForm(): void {
    this.switchForm = false;
  }

  public hidePassword(id: string): void {
    const password = document.getElementById(id) as HTMLInputElement;
    password.type = password.type === "password" ? "text" : "password";
  }
}

