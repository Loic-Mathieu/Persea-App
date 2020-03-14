import { NgModule } from '@angular/core';
import {ManagementRoutingModule} from './management-routing.module';
import {ClientsComponent} from './clients/clients.component';
import {CourtCasesComponent} from './court-cases/court-cases.component';
import {CommonModule} from '@angular/common';
import { DetailsComponent } from './clients/details/details.component';

@NgModule({
  declarations: [
    ClientsComponent,
    CourtCasesComponent,
    DetailsComponent
  ],
  imports: [
    ManagementRoutingModule,
    CommonModule
  ]
})
export class ManagementModule { }
