import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CategoriesService } from './northwind.service';

import { State } from '@progress/kendo-data-query';

import {
   GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public view: Observable<GridDataResult>;
    public state: State = {
        skip: 0,
        take: 10
    };

    constructor(private service: CategoriesService) {
        this.view = service;
        this.service.query(this.state);
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.service.query(state);
    }
  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
}
