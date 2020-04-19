import { Injectable } from '@angular/core';
import {PerseaHttpService} from "../service/persea-http.service";
import {Observable} from "rxjs";
import {HttpEvent} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

    private documentUrl = "/rest/document";

    constructor(private perseaHttpService: PerseaHttpService) { }

    public postSchematic(file: File, caseId: number): Observable<HttpEvent<{}>> {
        const data: FormData = new FormData();
        data.append('file', file);
        data.append('caseSeq', Number(caseId).toString());

        return this.perseaHttpService.postFile(this.documentUrl + "/generate/doc", data);
    }
}
