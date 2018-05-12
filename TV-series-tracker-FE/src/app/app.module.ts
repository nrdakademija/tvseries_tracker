import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AppRoutingModule } from './app.routing.module';
import { TvSeriesComponent } from './components/tvseries/list/tvseries.component';
import { TVSeriesGenreFilterPipe } from './pipes/tvseries-genre-filter.pipe';
import { GenreFilterComponent } from './components/tvseries/list/filter/tvseries-filter.component';
import { TVSerieService } from './services/tvseries/tvseries.service';
import { HttpModule } from '@angular/http'; // naujas
import { MySeriesComponent } from './components/myseries/myseries.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TvSeriesComponent,
    CalendarComponent,
    TVSeriesGenreFilterPipe,
    GenreFilterComponent,
    MySeriesComponent
  ],
  imports: [
    HttpModule, // naujas
    AppRoutingModule,
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [TVSerieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
