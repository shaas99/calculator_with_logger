import { EventEmitter } from 'events';
import { LogOptions } from './LogOptions';
import { Logger } from './Logger';
import {LogEntry} from './LogEntry';

export class LogManager extends EventEmitter {
  private options: LogOptions = {
    minLevels: {
      '': 'info'
    }
  };

  // Prevent the console logger from being added twice
  private consoleLoggerRegistered: boolean = false;

  public configure(options: LogOptions): LogManager {
    this.options = Object.assign({}, this.options, options);
    return this;
  }

  public getLogger(module: string): Logger {
    let minLevel = 'none';
    let match = '';

    for (const key in this.options.minLevels) {
      if (module.startsWith(key) && key.length >= match.length) {
        minLevel = this.options.minLevels[key];
        match = key;
      }
    }

    return new Logger(this, module, minLevel);
  }

  public onLogEntry(listener: (logEntry: LogEntry) => void): LogManager {
    this.on('log', listener);
    return this;
  }

  // public registerConsoleLogger()


  public registerConsoleLogger(): LogManager {
    if (this.consoleLoggerRegistered) return this;
  
    this.onLogEntry((logEntry) => {
        // const msg = `${logEntry.location} [${logEntry.module}] ${logEntry.message}`;
        const msg = `${new Date()} [${logEntry.module}] ${logEntry.message}`;     // added current date instead of the location

        switch (logEntry.level) {
            case 'trace':
                console.trace(msg);
                break;
            case 'debug':
                console.debug(msg);
                break;
            case 'info':
                console.info(msg);
                break;
            case 'warn':
                console.warn(msg);
                break;
            case 'error':
                console.error(msg);
                break;
            default:
                console.log(`{${logEntry.level}} ${msg}`);
        }
    });
  
    this.consoleLoggerRegistered = true;
    return this;
  }
}

export const logging = new LogManager();




