import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authServices = inject(AuthService);
  const router = inject(Router);

  if (authServices.authStatus() === AuthStatus.authenticated) {
    router.navigateByUrl('/dashboard');
    return false;
  }

  return true;
};
