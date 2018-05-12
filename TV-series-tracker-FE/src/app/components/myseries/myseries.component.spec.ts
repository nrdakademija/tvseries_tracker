import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySeriesComponent } from './myseries.component';

describe('MySeriesComponent', () => {
  let component: MySeriesComponent;
  let fixture: ComponentFixture<MySeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MySeriesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
