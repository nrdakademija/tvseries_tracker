import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TVSerieModel } from "../../models/tvSeries/tvseries.model";
import { GenreModel } from '../../models/genres/genres.model';
//import { HttpClient } from 'selenium-webdriver/http';


@Injectable()
export class TVSerieService {

    tvserieUrl = 'http://localhost:3000/tvseries';
    genreUrl = 'http://localhost:3000/genres';

    constructor(private http: Http/*, private httpClient: HttpClient*/) { }

    getTVSerieList(): Observable<TVSerieModel[]> {
        return this.http.get(this.tvserieUrl)
            .map((res: Response) => res.json() as Observable<TVSerieModel[]>)
            .catch((error: any) => Observable.throw(error));
    }

    getGenresList(): Observable<GenreModel[]> {
        return this.http.get(this.genreUrl)
            .map((res: Response) => res.json() as GenreModel[])
            .catch((error: any) => Observable.throw(error));
    }

}