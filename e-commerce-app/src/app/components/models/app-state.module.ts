import { Injectable } from "@angular/core";
import { AuthState } from "./auth-state.module";
import { AuthService } from "src/app/services/auth.service";
import { AccountService } from "src/app/services/account.service";
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
})
export class AppState {
    public readonly authState: AuthState;

    constructor(
        private readonly authService: AuthService,
        private readonly accountService: AccountService
    ) {
        this.authState = new AuthState();
    }

    public async getAccount(): Promise<User | null> {
        const login = localStorage.getItem(this.authService.loginKey);
        if (login) {
            const account = await this.accountService.getAccount(login);
            return account;
        }
        return null;
    }
}