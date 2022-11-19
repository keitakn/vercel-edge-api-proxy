import { createErrorResponse } from './handler';

export const notFoundHandler = async (request: Request): Promise<Response> => {
  const status = 404;

  const responseBody = {
    type: 'NotFound',
    title: `404 not found`,
    detail: `${request.url} is not found`,
    status,
  };

  return createErrorResponse(responseBody, status);
};
