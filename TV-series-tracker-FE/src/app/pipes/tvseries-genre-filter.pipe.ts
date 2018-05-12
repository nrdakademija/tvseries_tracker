import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/';

@Pipe({
    name: 'tvseriesGenreFilter'
})

export class TVSeriesGenreFilterPipe implements PipeTransform {
    transform(tvseries: Observable<any>, genreFilter: any): any {
        if (tvseries == null) {
            return [];
        }

        if (genreFilter) {
            return tvseries.filter(t => t.genre === genreFilter);
        }

        return tvseries;
    }
}
