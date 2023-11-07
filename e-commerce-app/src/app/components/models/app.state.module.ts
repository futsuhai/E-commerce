import { Injectable } from "@angular/core";
import { AuthState } from "./auth-state.module";
import { AuthService } from "src/app/services/auth.service";
import { AccountService } from "src/app/services/account.service";
import { User } from "./user.model";
import { ITokens } from "./tokens.model";

@Injectable({
    providedIn: 'root'
})
export class AppState {
    public readonly authState: AuthState;
    protected currentUser: User | null = null;
    protected currentTokens: ITokens | null = null;

    constructor(
        private readonly authService: AuthService,
        private readonly accountService: AccountService
    ) {
        this.authState = new AuthState();
    }

    public getCurrentUser(): User | null {
        const user = localStorage.getItem(this.authService.accountKey);
        // add token check
        if (user) {
            this.currentUser = JSON.parse(user);
            return this.currentUser;
        }
        return null;
    }

    public getCurrentTokens(): ITokens | null {
        const tokens = localStorage.getItem(this.authService.tokenKey);
        if (tokens) {
            this.currentTokens = JSON.parse(tokens);
            return this.currentTokens;
        }
        return null;
    }
}