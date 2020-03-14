import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientsComponent} from './clients/clients.component';
import {CourtCasesComponent} from './court-cases/court-cases.component';

const routes: Routes = [
  {path: '',   redirectTo: '/menu', pathMatch: 'full' },
  {path: 'clients', component: ClientsComponent},
  {path: 'court-cases', component: CourtCasesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
