import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CourtCasesService} from "../court-cases.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-court-case-create',
  templateUrl: './court-case-create.component.html',
  styleUrls: ['./court-case-create.component.css']
})
export class CourtCaseCreateComponent implements OnInit {

    form = new FormGroup({
        mainClient: new FormControl('', Validators.required),
        mainOpposition: new FormControl('', Validators.required),
        mainLawyer: new FormControl('', Validators.required)
    });

    constructor(private courtCasesService: CourtCasesService,
                private dialogRef: MatDialogRef<CourtCaseCreateComponent>) { }

    ngOnInit(): void {
    }

    submit(): void {
        this.courtCasesService.save({
            mainClient: this.form.value.mainClient as number,
            mainOpposition: this.form.value.mainOpposition as number,
            mainLawyer: this.form.value.mainLawyer as number
        }).subscribe(value => {
            this.dialogRef.close(value);
        }, error => {
            // TODO do something
        });
    }


}
