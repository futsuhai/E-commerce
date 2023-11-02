export class User {

    private id: string;
    private login: string;
    private password: string;
    private email?: string;

    constructor(data: IUser) {
        this.id = data.id;
        this.login = data.login;
        this.password = data.password;
        this.email = data.email;
    }
}

export interface IUser {
    id: string,
    login: string,
    email?: string,
    password: string
}