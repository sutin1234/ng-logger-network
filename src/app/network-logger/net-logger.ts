import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { LoggerServic } from './console.logger.service';

@Injectable()
export class Netlogger implements HttpInterceptor {
    constructor(private loggerService: LoggerServic) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.loggerService.log(req);
        return next.handle(req);
    }
}
