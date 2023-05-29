import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './auth/token-storage.service';

@Injectable({
	providedIn: 'root'
})
export class AuthImplementationService implements CanActivate {

	constructor(private ts: TokenStorageService,
		private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

		if (this.ts.getToken()) {
			return true;
		} else {
			return this.router.parseUrl('/account');
		}
	}
}
