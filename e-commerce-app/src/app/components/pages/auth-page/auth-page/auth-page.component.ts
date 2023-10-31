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
  switchForm: boolean = true;
  regForm!: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.regForm = this.formBuilder.group({
      login: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      passConfirm: ['', Validators.required]
    });
  }

  public async submitRegisterFrom(): Promise<void> {
    // valid
    const formValue = this.regForm.value;
    const newUser: User = new User({
      id: Guid.create().toString(),
      login: formValue.login,
      email: formValue.email,
      password: formValue.password
    });
    await this.authService.register(newUser);
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

