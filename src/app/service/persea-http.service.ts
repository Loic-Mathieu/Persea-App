import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {from, Observable, of} from "rxjs";
import {flatMap, map} from "rxjs/operators";
import {ServerService} from "../settings/server/server.service";
import {fromPromise} from "rxjs/internal-compatibility";

@Injectable({
    providedIn: 'root'
})
export class PerseaHttpService {

    private serverUrl: string;

    constructor(private http: HttpClient,
                private serverService: ServerService) { }

    private async getServerUrl(): Promise<string> {
        return new Promise<string>(resolve => {
            if (this.serverUrl) {
                resolve(this.serverUrl);
            } else {
                this.serverService.getActiveServer().subscribe({next: activeServer => {
                    this.serverUrl = activeServer.url;
                    resolve(activeServer.url);
                }});
            }
        });
    }

    public setServerUrl(url: string): void {
        this.serverUrl = url;
    }

    get<T>(url: string): Observable<T> {
        return fromPromise(this.getServerUrl())
            .pipe(flatMap(activeUrl => this.http.get<T>(encodeURI(activeUrl + url))
                    .pipe(map(r => r))
            ));
    }

    post<T>(url: string, body: any | null): Observable<T> {
        const header = new HttpHeaders()
            .set('Content-Type', 'text/xml')
            .append('Access-Control-Allow-Methods', 'GET')
            .append('Access-Control-Allow-Origin', '*')
            .append('Access-Control-Allow-Headers',
                'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method');

        return fromPromise(this.getServerUrl())
            .pipe(flatMap(activeUrl => this.http.post<{data: T}>(encodeURI(activeUrl + url), body)
                .pipe(map(result => result.data))
            ));
    }

    delete<T>(url: string): Observable<T> {
        return fromPromise(this.getServerUrl())
            .pipe(flatMap(activeUrl => this.http.delete<{data: T}>(encodeURI(activeUrl + url))
                .pipe(map(result => result.data))
            ));
    }
}
