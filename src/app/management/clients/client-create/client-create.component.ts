import { Component, OnInit } from '@angular/core';
import {ClientService} from "../client.service";
import {Client} from "../../../model/contributors/client";
import {Gender} from "../../../model/contributors/gender";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

    form = new FormGroup({
        lastName: new FormControl('', Validators.required),
        firstName: new FormControl('', Validators.required),

        gender: new FormControl('', Validators.required),

        phone: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email])
    });

    constructor(private clientService: ClientService) { }

    ngOnInit(): void {
    }

    getGenderChoices(): Array<string> {
        return Object.keys(Gender).filter(
            (type) => isNaN(type as any) && type !== 'values'
        );
    }

    submit(): void {
        const client = new Client();
        client.firstName = this.form.value.firstName;
        client.lastName = this.form.value.lastName;

        client.address = 1;
        client.gender = this.form.value.gender;

        client.mail = this.form.value.email;
        client.phoneNumber = this.form.value.phone;

        console.log(this.form.value, "form");
        console.log(client, "created");

        this.clientService.save(client).subscribe({
            next: value => console.log(value),
            error: err => console.log(err)
        });
    }
}
