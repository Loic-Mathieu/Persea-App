import { Component, OnInit } from '@angular/core';
import {CourtCase} from "../../model/court-case/courtCase";
import {MatTableDataSource} from "@angular/material/table";
import {PageEvent} from "@angular/material/paginator";
import {Page} from "../page-model";
import {CourtCasesService} from "./court-cases.service";
import {CourtCaseFilter} from "../../filters/court-case/courtCaseFilter";
import {MatDialog} from "@angular/material/dialog";
import {CourtCaseCreateComponent} from "./creation/court-case-create.component";



@Component({
  selector: 'app-court-cases',
  templateUrl: './court-cases.component.html',
  styleUrls: ['./court-cases.component.css']
})
export class CourtCasesComponent implements OnInit {

    // Booleans
    isLoading: boolean;

    // What is displayed
    datasource = new MatTableDataSource<CourtCase>();
    columnsToDisplay = ["caseNumber", "state"];

    // Where to work
    currentPage: Page<CourtCase>;
    columnsStatic = [];

    courtCaseFilter: CourtCaseFilter;

    constructor(private courtCasesService: CourtCasesService, private dialog: MatDialog) { }

    ngOnInit(): void {
        this.courtCaseFilter = new CourtCaseFilter();
        this.updatePage({pageSize: 10, pageIndex: 0, length: -1});
    }

    /*  CREATION    */
    createCourtCase(): void {
        const dialog = this.dialog.open(CourtCaseCreateComponent);
        // TODO redirect to new court case

    }

    /*  DATATABLE   */
    updatePage($event: PageEvent) {
        this.currentPage = $event;

        this.courtCaseFilter.pageNumber = $event.pageIndex;
        this.courtCaseFilter.pageSize = $event.pageSize;

        this.searchData();
    }

    private updateFilters(): void {

    }

    private searchData(): void {
        if (this.isLoading) {
            return;
        }

        this.isLoading = true;

        this.courtCasesService.getSize(this.courtCaseFilter).subscribe(size => {
            this.currentPage.length = size;

            this.courtCasesService.getAll(this.courtCaseFilter).subscribe(value => {
                this.currentPage.data = value;
                this.datasource.data = value;

                this.isLoading = false;
            });
        });
    }
}
