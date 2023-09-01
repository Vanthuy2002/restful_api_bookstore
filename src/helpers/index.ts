type LoggerProps = 'log' | 'warn' | 'error';

export const logger = (message: string, type: LoggerProps) => {
  console[type](message);
};
