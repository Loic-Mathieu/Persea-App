import { NgModule } from '@angular/core';
import {ManagementRoutingModule} from './management-routing.module';
import {ClientsComponent} from './clients/clients.component';
import {CourtCasesComponent} from './court-cases/court-cases.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import {SidebarModule} from "ng-sidebar";
import {CommonModule} from "@angular/common";
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ClientService} from "./clients/client.service";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CourtCasesService} from "./court-cases/court-cases.service";
import { CourtCaseCreateComponent } from './court-cases/creation/court-case-create.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [
        ClientsComponent,
        CourtCasesComponent,
        ClientDetailsComponent,
        ClientCreateComponent,
        CourtCaseCreateComponent,
    ],
    imports: [
        ManagementRoutingModule,
        SidebarModule.forRoot(),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatButtonModule
    ],
    providers: [
        ClientService,
        CourtCasesService
    ]
})
export class ManagementModule { }
