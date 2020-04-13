import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";
import {PerseaXmlService} from "../../service/persea-xml.service";
import xml2js from 'xml2js';
import {flatMap, map} from "rxjs/operators";

class Server {
    name: string;
    url: string;
}

@Injectable({
    providedIn: 'root',
})
export class ServerService {

    private uri = "/assets/servers.xml";

    constructor(private xml: PerseaXmlService) { }

    private parseActiveServer(rawXml): Observable<Server> {
        return new Observable<Server>(data => {
            const parser = new xml2js.Parser(
                {
                    trim: true,
                    explicitArray: true
                });
            parser.parseString(rawXml, (err, result) => {
                data.next({
                    name: result.Servers.ActiveServer[0].name[0],
                    url: result.Servers.ActiveServer[0].url[0]
                });
            });
            data.complete();
        });
    }

    private parseSavedServers(rawXml): Observable<Server> {
        return new Observable<Server>(data => {
            const parser = new xml2js.Parser(
                {
                    trim: true,
                    explicitArray: true
                });
            parser.parseString(rawXml, (err, result) => {
                result.Servers.SavedServers[0].server.forEach(server => {
                    data.next({
                       name: server.name[0],
                       url: server.url[0]
                    });
                });
            });
            data.complete();
        });
    }

    getSavedServers(): Observable<Server> {
        return this.xml.get(this.uri).pipe(flatMap(this.parseSavedServers));
    }

    getActiveServer(): Observable<Server> {
        return this.xml.get(this.uri).pipe(flatMap(this.parseActiveServer));
    }
}
