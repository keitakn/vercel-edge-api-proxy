import { createErrorResponse } from './handler';

export const indexHandler = async (request: Request): Promise<Response> => {
  const status = 404;

  const responseBody = {
    type: 'NotFound',
    title: `404 not found`,
    detail: `requestMethod is ${request.method}`,
    status,
  };

  return createErrorResponse(responseBody, status);
};
