import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Netlogger } from './net-logger';
import { LoggerServic } from './console.logger.service';

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Netlogger,
    multi: true
  }, LoggerServic]
})
export class NetworkLoggerModule { }
