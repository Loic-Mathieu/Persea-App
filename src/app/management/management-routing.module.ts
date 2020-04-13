import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientsComponent} from './clients/clients.component';
import {CourtCasesComponent} from './court-cases/court-cases.component';
import {ClientCreateComponent} from "./clients/client-create/client-create.component";

const routes: Routes = [
  {path: '',   redirectTo: '/menu', pathMatch: 'full' },
  {path: 'clients', component: ClientsComponent},
  {path: 'clients/create', component: ClientCreateComponent},
  {path: 'court-cases', component: CourtCasesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
