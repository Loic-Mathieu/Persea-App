import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {AppRoutingModule} from './app-routing.module';
import {PerseaHttpService} from "./service/persea-http.service";
import {HttpClientModule} from "@angular/common/http";
import {ServerService} from "./settings/server/server.service";
import {PerseaXmlService} from "./service/persea-xml.service";
import {DocumentComponent} from "./document/document.component";
import {DocumentService} from "./document/document.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        DocumentComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [
        PerseaHttpService,
        PerseaXmlService,
        ServerService,
        DocumentService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
