import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import { AppState } from './reducers/index';
import { Logout } from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {


    }

    onLogout() {
      this.store.dispatch(new Logout());
    }


}
