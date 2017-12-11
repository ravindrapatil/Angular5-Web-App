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
import { AngularDataTableComponent } from './tables/angular-data-table/angular-data-table.component';
import { PrimeNgComponent } from './prime-ng/prime-ng.component';
import { DatatableComponent } from './prime-ng/datatable/datatable.component';
import { PanelComponent } from './prime-ng/panel/panel.component';
import { MessagesComponent } from './prime-ng/messages/messages.component';

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
  { path: 'ngForm', component: FormsComponent },
  { path: 'eventemitters', component: EventEmittersComponent },
  { path: 'angularDT', component: AngularDataTableComponent },
  { path: 'primeNG', component: PrimeNgComponent },
  { path: 'primeNGDataTable', component: DatatableComponent },
  { path: 'primeNGpanel', component: PanelComponent },
  { path: 'primeNGmsg', component: MessagesComponent }
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
