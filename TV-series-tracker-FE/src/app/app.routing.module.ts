import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TvSeriesComponent } from './components/tvseries/list/tvseries.component';
import { MySeriesComponent } from './components/myseries/myseries.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'tvseries', component: TvSeriesComponent },
    { path: 'myseries', component: MySeriesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
