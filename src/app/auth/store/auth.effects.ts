import { Login, AuthActionTypes, AuthActions, Logout } from './auth.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { defer, of } from 'rxjs';
import { User } from '../../model/user.model';

@Injectable()
export class AuthEffects {

  @Effect({dispatch: false})
  $login = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap((action: Login) => {
      localStorage
      .setItem('user', JSON.stringify(action.payload.user));
    })
  );

  @Effect({dispatch: false})
  $logout = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAction),
    tap(() => {
      localStorage
      .removeItem('user');
      this.router.navigateByUrl('/login');
    })
  );

  @Effect()
  init$ = defer(() => {
    const userData = localStorage.getItem('user');

    if (userData) {
      const user: User = JSON.parse(userData);
      return of(new Login({user}));
    } else {
      return of(new Logout());
    }
  });

  constructor(
    private actions$: Actions,
    private router: Router
  ) {  }
}
