import {Gender} from "./gender";
import {Address} from "../Address";

export class Contributor {
    id: number;

    lastName: string;
    firstName: string;
    gender: Gender;

    address: Address;

    phoneNumber: string;
    mail: string;
}
