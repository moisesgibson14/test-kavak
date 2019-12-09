import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDataComponent } from './all-data/all-data.component';
import { DataByIdComponent } from './data-by-id/data-by-id.component';
import { SearchWordComponent } from './search-word/search-word.component';
import { ApiService } from '../services/api.service';
import { CapitalizeTextPipe } from '../pipes/capitalize-text.pipe';
import { PagesRoutingModule } from './pages.routing.module';


@NgModule({
  declarations: [
      AllDataComponent,
      DataByIdComponent,
      SearchWordComponent,
      CapitalizeTextPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientModule,
    PagesRoutingModule
  ],
  providers: [ApiService],

})
export class PagesModule { }
