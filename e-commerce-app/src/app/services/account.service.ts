import { Injectable, NgZone } from "@angular/core";
import { BaseService } from "./base.service";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../app.config";
import { User } from "../components/models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AccountService extends BaseService {

    constructor(
        http: HttpClient,
        zone: NgZone,
        protected config: AppConfig
    ) {
        super(http, zone)
    }

    public getAccount(login: string): Promise<User> {
        return this.get(`${this.config.accountsApi}/GetAccount/${login}`).then(data => data.body)
    }
}