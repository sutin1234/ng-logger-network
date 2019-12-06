import { Logger } from './logger.interface';

export class LoggerServic implements Logger {
    public log(data: any) {
        console.group('ConsoleLoggerService');
        console.log(data);
        console.groupEnd();
    }

}
