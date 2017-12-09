import { BrowserModule } from '@angular/platform-browser';
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

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
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
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
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
    })
  ],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules },
    NewsApiService, NotesJsonService, GithubUsersService, GeofireGooglemapsService,
    FirestoreItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
