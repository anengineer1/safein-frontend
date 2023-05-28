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

    console.log("Hola");
    if (token != null) {
      //for backend spring
      authReq = req.clone({
        headers: req.headers.set(KEYS.TOKEN_HEADER_KEY, 'Bearer ' + token)
      });
    }
    
    return next.handle(authReq);
  }
}

export const authInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, userClass: AuthInterceptor, multi: true }
]
