import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/contributors/client';
import {Gender} from "../../model/contributors/gender";
import {Address} from "../../model/Address";

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

    clients: Client[];

    constructor() {
        this.clients = [];
    }

    ngOnInit(): void {
        this.fillList();
    }

    // TEMP
    private fillList(): void {
        this.clients = [
            {
                id: 1,
                lastName: "LENNON",
                firstName: "Bob",
                gender: Gender.Male,

                address: {},

                phoneNumber: "444719",
                mail: "mail@example.com"
            },
            {
                id: 1,
                lastName: "MOLAS",
                firstName: "Frederic",
                gender: Gender.Male,

                address: {},

                phoneNumber: "444719",
                mail: "mail@example.com"
            },
            {
                id: 1,
                lastName: "RASSIAT",
                firstName: "Sebastien",
                gender: Gender.Male,

                address: {},

                phoneNumber: "444719",
                mail: "mail@example.com"
            },
            {
                id: 1,
                lastName: "WALKER",
                firstName: "Doug",
                gender: Gender.Male,

                address: {},

                phoneNumber: "444719",
                mail: "mail@example.com"
            },
        ];
    }
}
