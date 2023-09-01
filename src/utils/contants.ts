export const statusCodes = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  SERVER: 500,
  CREATED: 201
};

type LoggerProps = 'log' | 'warn' | 'error';

export const logger = (message: string, type: LoggerProps) => {
  console[type](message);
};
