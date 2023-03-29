import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleDataComponent } from './sample-data/sample-data.component';
import { NavbarComponent } from './Common/navbar/navbar.component';
import { FooterComponent } from './Common/footer/footer.component';
import { LoadDataComponent } from './CrudOperation/load-data/load-data.component';
import { AddEditDataComponent } from './CrudOperation/add-edit-data/add-edit-data.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SampleDataComponent,
    NavbarComponent,
    FooterComponent,
    LoadDataComponent,
    AddEditDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
