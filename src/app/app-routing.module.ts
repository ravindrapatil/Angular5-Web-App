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
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { OnlyLoggedInUsersGuardGuard } from './guard/only-logged-in-users-guard.guard';
import { LoginComponent } from './login/login.component';
import { Ng2ReduxComponent } from './ng2-redux/ng2-redux.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: any = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'charts', component: ChartsComponent, canActivate: [OnlyLoggedInUsersGuardGuard] },
  { path: 'news', component: NewsComponent, canActivate: [OnlyLoggedInUsersGuardGuard] },
  { path: 'notes', component: NotesComponent, canActivate: [OnlyLoggedInUsersGuardGuard] },
  { path: 'tables', component: BasicTableComponent, canActivate: [OnlyLoggedInUsersGuardGuard] },
  { path: 'ngxdatatable', component: NgxDatatableComponent, canActivate: [OnlyLoggedInUsersGuardGuard] },
  { path: 'googlemaps', component: GooglemapContainerComponent, canActivate: [OnlyLoggedInUsersGuardGuard] },
  { path: 'angularfire', component: AfContainerComponent, canActivate: [OnlyLoggedInUsersGuardGuard] },
  { path: 'ngForm', component: FormsComponent, canActivate: [OnlyLoggedInUsersGuardGuard] },
  { path: 'eventemitters', component: EventEmittersComponent, canActivate: [AuthGuardGuard, OnlyLoggedInUsersGuardGuard] },
  { path: 'angularDT', component: AngularDataTableComponent, canActivate: [OnlyLoggedInUsersGuardGuard] },
  { path: 'primeNG', component: PrimeNgComponent, canActivate: [OnlyLoggedInUsersGuardGuard] },
  { path: 'primeNGDataTable', component: DatatableComponent, canActivate: [OnlyLoggedInUsersGuardGuard] },
  { path: 'primeNGpanel', component: PanelComponent, canActivate: [OnlyLoggedInUsersGuardGuard] },
  { path: 'primeNGmsg', component: MessagesComponent, canActivate: [OnlyLoggedInUsersGuardGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'ng2redux', component: Ng2ReduxComponent},
  { path: 'rxjs', component: RxjsComponent}
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
