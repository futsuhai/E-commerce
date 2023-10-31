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

  public login(user: User): Promise<number> {
    return this.post(`${this.config.authApi}/Auth`, user).then(response => {
      console.warn(response);
      if (response.status === 200) {
        const data = response.body.Value;
        localStorage.setItem(this.tokenKey, data.acces_token);
        localStorage.setItem(this.loginKey, data.login);
      }
      return response.status;
    });
  }

  public register(user: User): Promise<void> {
    return this.post(`${this.config.authApi}/Register`, user);
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.loginKey);
  }
}


