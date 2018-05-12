import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx'; // pakeistas
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MySeriesModel } from "../../models/myseries/myseries.model";
import { GenreModel } from '../../models/genres/genres.model';
//import { HttpClient } from 'selenium-webdriver/http';


@Injectable()
export class MySeriesService {

    myserieUrl = 'http://localhost:3000/myseries';
    genreUrl = 'http://localhost:3000/genres';

    constructor(private http: Http/*, private httpClient: HttpClient*/) { }

    getMySerieList(): Observable<MySeriesModel[]> {
        return this.http.get(this.myserieUrl)
            .map((res: Response) => res.json() as Observable<MySeriesModel[]>)
            .catch((error: any) => Observable.throw(error));
    }

    getGenresList(): Observable<GenreModel[]> {
        return this.http.get(this.genreUrl)
            .map((res: Response) => res.json() as GenreModel[])
            .catch((error: any) => Observable.throw(error));
    }

}