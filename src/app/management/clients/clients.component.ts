import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/contributors/client';
import {Gender} from "../../model/contributors/gender";

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

    clients: Client[];
    selectedClient: Client;

    sidebarToggled: boolean;

    constructor() {
        this.clients = [];
    }

    ngOnInit(): void {
        this.sidebarToggled = true;
        this.fillList();
    }

    toggleSideBar() {
        this.sidebarToggled = !this.sidebarToggled;
    }

    addOne(): void {
        this.clients.push(
            {
                id: 1,
                lastName: "LENNON",
                firstName: "Bob",
                gender: Gender.MALE,

                address: 1,

                phoneNumber: "444719",
                mail: "mail@example.com"
            }
        );
    }

    selectOne(client: Client): void {
        this.selectedClient = client;
    }

    // TEMP
    private fillList(): void {
        this.clients = [
            {
                id: 1,
                lastName: "LENNON",
                firstName: "Bob",
                gender: Gender.MALE,

                address: 1,

                phoneNumber: "444719",
                mail: "mail@example.com"
            },
            {
                id: 2,
                lastName: "MOLAS",
                firstName: "Frederic",
                gender: Gender.MALE,

                address: 2,

                phoneNumber: "444719",
                mail: "mail@example.com"
            },
            {
                id: 3,
                lastName: "RASSIAT",
                firstName: "Sebastien",
                gender: Gender.MALE,

                address: 3,

                phoneNumber: "444719",
                mail: "mail@example.com"
            },
            {
                id: 4,
                lastName: "WALKER",
                firstName: "Doug",
                gender: Gender.MALE,

                address: 4,

                phoneNumber: "444719",
                mail: "mail@example.com"
            },
        ];
    }
}
