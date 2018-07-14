import { AuthState } from './auth/store/auth.reducer';
import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import { AppState } from './reducers/index';
import { Logout } from './auth/store/auth.actions';
import { map } from 'rxjs/operators';
import { isLoggedIn, isLoggedOut } from './auth/store/auth.selectos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private router: Router) {

  }

  ngOnInit() {
    this.isLoggedIn$ = this.store
    .pipe(
      select(isLoggedIn)
    );

    this.isLoggedOut$ = this.store
    .pipe(
      select(isLoggedOut)
    );
  }

  onLogout() {
    this.store.dispatch(new Logout());
  }
}
