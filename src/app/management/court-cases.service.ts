import { Injectable } from '@angular/core';
import {PerseaHttpService} from "../service/persea-http.service";
import {Observable} from "rxjs";
import {CourtCase} from "../model/court-case/courtCase";
import {map} from "rxjs/operators";
import {CourtCaseFilter} from "../filters/court-case/courtCaseFilter";

@Injectable()
export class CourtCasesService {

    private courtCaseUri = "/rest/courtCases";

    constructor(private http: PerseaHttpService) { }

    public getSize(filter: CourtCaseFilter): Observable<number> {
        return this.http.get<number>(`${this.courtCaseUri}` + "/size" + filter.createUrlParameters());
    }

    public getAll(filter: CourtCaseFilter): Observable<CourtCase[]> {
        return this.http.get<CourtCase[]>(`${this.courtCaseUri}` + filter.createUrlParameters())
            .pipe(map(courtCases => courtCases.map(c => Object.assign(new CourtCase(), c as CourtCase))));
    }
}
