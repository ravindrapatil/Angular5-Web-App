import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CollapseModule } from 'ngx-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import exporting from 'highcharts/modules/exporting.src.js';
import exporting2 from 'highcharts/modules/solid-gauge.src.js';
import exporting3 from 'highcharts/highcharts-more.src.js';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2YaTableModule } from 'ng2-ya-table';
import { AdvancedTableModule } from 'ngx-advanced-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
// PrimeNG
import { DataTableModule, SharedModule, DropdownModule, AccordionModule,
  PanelModule, TabViewModule, FieldsetModule, GrowlModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { NewsComponent } from './news/news.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { NewsApiService } from './services/news-api.service';
import { NewsFilterPipe } from './filter/news-filter.pipe';
import { NotesComponent } from './notes/notes.component';
import { NotesJsonService } from './services/notes-json.service';
import { LineChartComponent } from './line-chart/line-chart.component';
import { GaugeSpeedometerComponent } from './highcharts/gauge-speedometer/gauge-speedometer.component';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { BasicAjaxTableComponent } from './tables/basic-ajax-table/basic-ajax-table.component';
import { GithubUsersService } from './services/github-users.service';
import { NgxDatatableComponent } from './tables/ngx-datatable/ngx-datatable.component';
import { GooglemapContainerComponent } from './google-maps/googlemap-container/googlemap-container.component';
import { GooglemapAutocompleteComponent } from './google-maps/googlemap-autocomplete/googlemap-autocomplete.component';
import { GeofireGooglemapsComponent } from './google-maps/geofire-googlemaps/geofire-googlemaps.component';
import { GeofireGooglemapsService } from './services/geofire-googlemaps.service';
import { AfContainerComponent } from './angularfire2/af-container/af-container.component';
import { FirestoreItemService } from './services/firestore-item.service';
import { FormsComponent } from './forms/forms.component';
import { ReactiveformsComponent } from './forms/reactiveforms/reactiveforms.component';
import { FormValidateComponent } from './forms/form-validate/form-validate.component';
import { EventEmittersComponent } from './event-emitters/event-emitters.component';
import { EventEmittersChildComponent } from './event-emitters/event-emitters-child.component';
import { PassDataToChildComponent } from './event-emitters/pass-data-to-child/pass-data-to-child.component';
import { AngularDataTableComponent } from './tables/angular-data-table/angular-data-table.component';
import { PrimeNgComponent } from './prime-ng/prime-ng.component';
import { DatatableComponent } from './prime-ng/datatable/datatable.component';
import { CarsService } from './services/cars.service';
import { PanelComponent } from './prime-ng/panel/panel.component';
import { MessagesComponent } from './prime-ng/messages/messages.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { AuthService } from './services/auth.service';
import { OnlyLoggedInUsersGuardGuard } from './guard/only-logged-in-users-guard.guard';
import { LoginComponent } from './login/login.component';
import { Ng2ReduxComponent } from './ng2-redux/ng2-redux.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { TodoListComponent } from './ng2-redux/todo-list/todo-list.component';
// import { INCREMENT } from './actions';

export function highchartsModules() {
  return [ exporting, exporting2, exporting3 ];
}

@NgModule({
  declarations: [
    NewsFilterPipe,
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    ChartsComponent,
    NewsComponent,
    HighchartsComponent,
    NotesComponent,
    LineChartComponent,
    GaugeSpeedometerComponent,
    BasicTableComponent,
    BasicAjaxTableComponent,
    NgxDatatableComponent,
    GooglemapContainerComponent,
    GooglemapAutocompleteComponent,
    GeofireGooglemapsComponent,
    AfContainerComponent,
    FormsComponent,
    ReactiveformsComponent,
    FormValidateComponent,
    EventEmittersComponent,
    EventEmittersChildComponent,
    PassDataToChildComponent,
    AngularDataTableComponent,
    PrimeNgComponent,
    DatatableComponent,
    PanelComponent,
    MessagesComponent,
    LoginComponent,
    Ng2ReduxComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    NgbModule.forRoot(),
    CollapseModule.forRoot(),
    NgbCollapseModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    ChartModule,
    Ng2SmartTableModule,
    Ng2YaTableModule.forRoot(),
    AdvancedTableModule,
    NgxDatatableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8DiMc7fh5xLy68cI_RXag_zwjsqnJEo8',
      libraries: ['places']
    }),
    DataTableModule,
    SharedModule, DropdownModule, AccordionModule, PanelModule, TabViewModule, FieldsetModule,
    GrowlModule,
    NgReduxModule
  ],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules },
    NewsApiService, NotesJsonService, GithubUsersService, GeofireGooglemapsService,
    FirestoreItemService,
    CarsService,
    AuthGuardGuard,
    AuthService,
    OnlyLoggedInUsersGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
