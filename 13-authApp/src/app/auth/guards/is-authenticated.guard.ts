import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authServices = inject(AuthService);
  const router = inject(Router);

  if (authServices.authStatus() === AuthStatus.authenticated) {
    return true;
  }

  // if (authServices.authStatus() == AuthStatus.checking) {
  //   return false;
  // }
  // const url = state.url;
  // localStorage.setItem('url', url);
  router.navigateByUrl('/auth/login');

  return false;
};
