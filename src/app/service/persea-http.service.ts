import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {flatMap} from "rxjs/operators";
import {ServerService} from "../settings/server/server.service";
import {fromPromise} from "rxjs/internal-compatibility";

class JsonOption {
    headers?: HttpHeaders;
    observe?: 'body';
    params: HttpParams;
    reportProgress?: boolean;
    responseType: 'json';
    withCredentials?: boolean;
}

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

    get<T>(url: string, options?: JsonOption): Observable<T> {
        return fromPromise(this.getServerUrl()).pipe(flatMap<string, Observable<T>>(activeUrl =>
            this.http.get<T>(encodeURI(activeUrl + url), options)
        ));
    }

    post(url: string, body: any | null, options?: JsonOption): Observable<any> {
        return fromPromise(this.getServerUrl()).pipe(flatMap<string, Observable<any>>(activeUrl =>
            this.http.post<any>(encodeURI(activeUrl + url), body, options)
        ));
    }

    delete<T>(url: string, options?: JsonOption): Observable<T> {
        return fromPromise(this.getServerUrl()).pipe(flatMap<string, Observable<T>>(activeUrl =>
            this.http.delete<T>(encodeURI(activeUrl + url), options)
        ));
    }

    /*  ======   */

    postFile(url: string, data: FormData): Observable<HttpEvent<{}>> {
        return fromPromise(this.getServerUrl()).pipe(flatMap<string, Observable<HttpEvent<{}>>>(activeUrl => {
            const newRequest = new HttpRequest('POST', activeUrl + url, data, {
                reportProgress: true,
                responseType: 'text'
            });
            return this.http.request(newRequest);
        }));
    }
}
