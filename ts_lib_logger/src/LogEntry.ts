export interface LogEntry {
    level: string;
    module: string;
    location?: string;
    message: string;
  }