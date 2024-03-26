import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
	const router = inject(Router);

	const localData = localStorage.getItem('token');
	if (localData == null) {
    window.location.href = 'http://localhost:4200/Login';
		return false;
	} else {
		return true;
	}
};
