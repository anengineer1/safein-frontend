import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/auth/token-storage.service';
import { KEYS } from '../enviroments/KEYS';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private token: TokenStorageService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();

    if (token != null) {
      //for backend spring
      authReq = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token),
      });
    }
    
    return next.handle(authReq);
  }
}

export const authInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
