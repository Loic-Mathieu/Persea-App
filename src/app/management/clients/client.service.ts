import { Injectable } from '@angular/core';
import {Client} from "../../model/contributors/client";
import {PerseaHttpService} from "../../service/persea-http.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class ClientService {

    private clientUri = "/rest/clients";

    constructor(private http: PerseaHttpService) { }

    public get(id: number): Observable<Client> {
        return this.http.get<Client>(`${this.clientUri}/${id}`)
            .pipe(map(c => Object.assign(new Client(), c as Client)));
    }

    public getAll(): Observable<Client[]> {
        return this.http.get<Client[]>(`${this.clientUri}`)
            .pipe(map(clients => clients.map(c => Object.assign(new Client(), c as Client))));
    }

    public save(client: Client): Observable<number> {
        return this.http.post(`${this.clientUri}`, client);
    }
}
