import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor() {}

  // intercept(request: HttpRequest<any>, handler: HttpHandler)
  // {
  //   console.log('interceptor called');
  //   const modifiedRequest = request.clone({
  //     headers: request.headers.append(
  //       'authorization',
  //       `Bearer ${this.auth.getToken()}`
  //     ),
  //   });
  //   return handler.handle(modifiedRequest);
  // }
  intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('interceptor called');
    const modifiedRequest = request.clone({
      headers:request.headers.append('authorization',`Bearer`)
    })
    
     return handler.handle(request);
   }
}

