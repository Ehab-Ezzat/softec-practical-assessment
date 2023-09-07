import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // assuming you have a token in your local storage named token
    const token = localStorage.getItem('token');
    if (token) {
      let authReq = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + token)
      });
    }
    // That's where I handle the http requests error globally
    return next.handle(request).pipe(
      tap(() => {
        },
        error => {
          alert(error.message)
        }
      )
    );
  }
}
