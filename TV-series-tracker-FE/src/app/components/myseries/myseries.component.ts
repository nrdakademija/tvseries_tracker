import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { Observable } from 'rxjs/Rx';
import { MySeriesModel } from '../../models/myseries/myseries.model';
import { MySeriesService } from '../../services/myseries/myseries.service';
import { GenreModel } from '../../models/genres/genres.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myseries',
  templateUrl: './myseries.component.html',
  styleUrls: ['./myseries.component.css']
})
export class MySeriesComponent implements OnInit {

  myseries$: Observable<MySeriesModel[]>;
  userSeries$: Observable<any>;

  loading = false;

  myserieHeaders: any[] = [
    { col: 'no', label: '#' },
    { col: 'name', label: 'Name' },
    { col: 'series', label: 'series' },
  ];


  constructor(private myseriesService: MySeriesService,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit() {
    this.loading = true;
    /*this.myseriesService.getMySerieList().subscribe((data: MySeriesModel[]) => {
      this.myseries$ = Observable.of(data);
      this.loading = false;
    });*/
  }

  open(modal, myseriesIndex) {
    this.modalService.open(modal);
    this.userSeries$ = this.myseries$.map(arr => arr[myseriesIndex].series);
}
  
}
