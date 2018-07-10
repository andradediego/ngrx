import * as AuthActions from './auth.actions';
import { User } from '../../model/user.model';


export interface AuthState {
  loggedIn: boolean;
  user: User;
}

const initialState: AuthState = {
  loggedIn: false,
  user: undefined
};

export function authReducer(state: AuthState = initialState, action: AuthActions.AuthActions): AuthState {
  switch (action.type) {
    case (AuthActions.AuthActionTypes.LoginAction): {
      return {
        loggedIn: true,
        user: action.payload.user
      };
    }
    case (AuthActions.AuthActionTypes.LogoutAction): {
      return {
        loggedIn: false,
        user: undefined
      };
    }
    default:
      return state;
  }
}
