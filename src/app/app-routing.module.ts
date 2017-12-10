import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { NewsComponent } from './news/news.component';
import { NotesComponent } from './notes/notes.component';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { NgxDatatableComponent } from './tables/ngx-datatable/ngx-datatable.component';
import { GooglemapContainerComponent } from './google-maps/googlemap-container/googlemap-container.component';
import { AfContainerComponent } from './angularfire2/af-container/af-container.component';
import { FormsComponent } from './forms/forms.component';
import { EventEmittersComponent } from './event-emitters/event-emitters.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'tables', component: BasicTableComponent },
  { path: 'ngxdatatable', component: NgxDatatableComponent },
  { path: 'googlemaps', component: GooglemapContainerComponent },
  { path: 'angularfire', component: AfContainerComponent },
  { path: 'ngForm', component: FormsComponent},
  { path: 'eventemitters', component: EventEmittersComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
