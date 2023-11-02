import { Injectable, NgZone } from '@angular/core';
import { User } from '../components/models/user.model';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(
    http: HttpClient,
    zone: NgZone,
    protected config: AppConfig
  ) { super(http, zone) }

  public get loginKey(): string {
    return "currentAccount";
  }
  public get tokenKey(): string {
    return "currentToken";
  }

  public login(user: User): Promise<void> {
    return this.post(`${this.config.authApi}/Auth`, user);
  }

  public register(user: User): Promise<void> {
    return this.post(`${this.config.authApi}/Register`, user);
  }

  public logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.loginKey);
  }
}


