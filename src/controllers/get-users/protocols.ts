import { User } from "../../models/user";
import { HttpResponse } from "../protocols";

export interface IGetUsersController {
    handler(): Promise<HttpResponse<User[]>>;
}

export interface IGetUsersController {
    getUsers(): Promise<User[]>;
}