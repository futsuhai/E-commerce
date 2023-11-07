import { Injectable, NgZone } from '@angular/core';
import { User } from '../components/models/user.model';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { ITokens } from '../components/models/tokens.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(
    http: HttpClient,
    zone: NgZone,
    protected config: AppConfig
  ) { super(http, zone) }

  public get accountKey(): string {
    return "currentAccount";
  }
  public get tokenKey(): string {
    return "currentTokens";
  }

  public async login(user: User): Promise<void> {
    const response = await this.put(`${this.config.authApi}/Auth`, user);
    if (response) {
      localStorage.setItem(this.accountKey, JSON.stringify(response.account));
      localStorage.setItem(this.tokenKey, JSON.stringify(response.tokens));
    }
  }

  public register(user: User): Promise<void> {
    return this.post(`${this.config.authApi}/Register`, user);
  }

  public async refreshTokens(refreshToken: string): Promise<void> {
    const response = await this.put(`${this.config.authApi}/RefreshTokens`, JSON.stringify({ refreshToken: refreshToken }));
    if (response) {
      localStorage.setItem(this.tokenKey, JSON.stringify(response.tokens))
    }
  }

  public logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.accountKey);
  }
}


