import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {DocumentComponent} from "./document/document.component";

const routes: Routes = [
    {path: '', component: MenuComponent},
    {path: 'management', loadChildren: () => import('./management/management.module').then(m => m.ManagementModule)},
    {path: 'document', component: DocumentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
