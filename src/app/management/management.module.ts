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

@NgModule({
    declarations: [
        ClientsComponent,
        CourtCasesComponent,
        ClientDetailsComponent,
        ClientCreateComponent,
    ],
    imports: [
        ManagementRoutingModule,
        SidebarModule.forRoot(),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        ClientService
    ]
})
export class ManagementModule { }
