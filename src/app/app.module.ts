import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizeTextPipe } from './pipes/capitalize-text.pipe';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AllDataComponent } from './pages/all-data/all-data.component';
import { DataByIdComponent } from './pages/data-by-id/data-by-id.component';
import { SearchWordComponent } from './pages/search-word/search-word.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizeTextPipe,
    AllDataComponent,
    DataByIdComponent,
    SearchWordComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
