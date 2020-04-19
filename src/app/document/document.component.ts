import { Component, OnInit } from '@angular/core';
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {DocumentService} from "./document.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

    caseId: number;

    loading: boolean;
    progressBar: {percentage: number, complete: boolean};

    form = new FormGroup({
        documentText: new FormControl(
            {value: '', disabled: true},
            Validators.required
        )
    });

    constructor(private documentService: DocumentService) { }

    ngOnInit(): void {
        // TODO suppr
        this.caseId = 1;
    }

    uploadFile(file): void {
        if (this.loading) {
            return;
        }

        this.loading = true;
        this.progressBar = {percentage: 0, complete: false};
        this.documentService.postSchematic(file, this.caseId).subscribe({
            next: data => {
                if (data.type === HttpEventType.UploadProgress) {
                    this.progressBar.percentage = Math.round(100 * data.loaded / data.total);
                } else if (data instanceof HttpResponse) {
                    this.form.get('documentText').setValue(data.body as string);
                    this.progressBar.complete = true;
                }
            },
            error: err => console.error(err),
            complete: () => {
                this.loading = false;
                this.form.get('documentText').enable();
            }
        });
    }

    createPdf() {
    }
}
