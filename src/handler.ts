type ErrorBody = {
  title: string;
  detail?: string;
  type?: string | 'about:blank';
  status?: number;
};

const defaultSuccessStatus = 200;

const defaultErrorStatus = 500;

type ResponseHeader = {
  'Content-Type': 'application/json';
  'X-Request-Id'?: string;
  'X-Lambda-Request-Id'?: string;
};

const createSuccessResponse = (
  body: unknown,
  statusCode = defaultSuccessStatus,
  headers: ResponseHeader = { 'Content-Type': 'application/json' },
): Response => {
  const jsonBody = JSON.stringify(body);

  return new Response(jsonBody, { headers, status: statusCode });
};

const createErrorResponse = (
  body: ErrorBody,
  statusCode = defaultErrorStatus,
): Response => createSuccessResponse(body, statusCode);

export const handleNotFound = async (request: Request): Promise<Response> => {
  const status = 404;

  const responseBody = {
    title: `not_found`,
    detail: `requestMethod is ${request.method}`,
    status,
  };

  return createErrorResponse(responseBody, status);
};
