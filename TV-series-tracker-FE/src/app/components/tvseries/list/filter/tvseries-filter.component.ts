import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GenreModel } from '../../../../models/genres/genres.model';

@Component({
    selector: 'app-genre-filter-buttons',
    template: `
    <div class="container" style="display: flex; margin-left: -2rem;">
        <button type="button" class="btn btn-primary"
        (click)="setGenreFilter()"> All</button>
        <button *ngFor="let g of genresInDifferentComponent$ | async" type="button" class="btn btn-primary mr-1"
        (click)="setGenreFilter(g.id)">{{g.name}}</button>
    </div>
    `
})

export class GenreFilterComponent implements OnInit {

    @Input() genresInDifferentComponent$: Observable<GenreModel[]>;

    @Output() filterEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() { }

    setGenreFilter(genreId) {
        this.filterEvent.emit(genreId);
    }

}
