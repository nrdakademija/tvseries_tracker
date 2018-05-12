import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TVSerieModel } from '../../../models/tvseries/tvseries.model';
import { TVSerieService } from '../../../services/tvseries/tvseries.service';
import { GenreModel } from '../../../models/genres/genres.model';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrls: ['./tvseries.component.css']
})
export class TvSeriesComponent implements OnInit {

  tvseries$: Observable<TVSerieModel[]>;
  genres$: Observable<GenreModel[]>;
  tvseriesDates$: Observable<any>;

  loading = false;

  genreFilter: any;

  tvserieHeaders: any[] = [
    { col: 'no', label: '#' },
    { col: 'name', label: 'Name' },
    { col: 'seriesYear', label: 'Year' },
    { col: 'seasons', label: 'Seasons' },
    { col: 'genre', label: 'Genre' },
    { col: 'description', label: 'Description' },
    { col: 'serieList', label: 'Serie List' },
    { col: 'watchlist', label: 'Watchlist' }
  ];

  constructor(private tvseriesService: TVSerieService,
    private modalService: NgbModal, ) { }

  ngOnInit() {
    this.loading = true;
    this.tvseriesService.getTVSerieList().subscribe((data: TVSerieModel[]) => {
      this.tvseries$ = Observable.of(data);

      this.tvseriesService.getGenresList().subscribe((d: GenreModel[]) => {
        this.genres$ = Observable.of(d);
      });
      this.loading = false;
    });
  }
  setGenreFilter(genreId) {
    this.genreFilter = genreId;
  }

  filterTvSeriesOfGenres(genreFilter) {
    if (genreFilter) {
      return this.tvseries$.map(items => items.filter(i => i.genre === genreFilter));
    }
    return this.tvseries$;
  }
  getGenre(genreId) {
    /*for (let i in this.genres$) {
      if (i.id === genreId) {
        return i.name;
      }
    }
    return "-";*/
  }
  open(modal, tvSeriesIndex) {
    this.modalService.open(modal);
    this.tvseriesDates$ = this.tvseries$.map(arr => arr[tvSeriesIndex].tvSerieDate);
  }
  add(tvserieID) {

  }
}
