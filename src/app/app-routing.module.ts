import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDataComponent } from './pages/all-data/all-data.component';
import { DataByIdComponent } from './pages/data-by-id/data-by-id.component';
import { SearchWordComponent } from './pages/search-word/search-word.component';

const routes: Routes = [
  {
    path: '',
    component: AllDataComponent
  },
  {
    path: ':id',
    component: DataByIdComponent
  },
  {
    path: 'busqueda/:palabra',
    component: SearchWordComponent
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
