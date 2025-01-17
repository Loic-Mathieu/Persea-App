import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {AppRoutingModule} from './app-routing.module';
import {PerseaHttpService} from "./service/persea-http.service";
import {HttpClientModule} from "@angular/common/http";
import {ServerService} from "./settings/server/server.service";
import {PerseaXmlService} from "./service/persea-xml.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
      PerseaHttpService,
      PerseaXmlService,
      ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
