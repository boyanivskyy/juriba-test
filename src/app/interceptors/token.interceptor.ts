import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cloneReq = req.clone({ url: req.url + `&key=${environment.youtubeApiKey}` });
        return next.handle(cloneReq);
    }
}
