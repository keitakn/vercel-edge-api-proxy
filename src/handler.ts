type ProblemDetails = {
  type: string | 'about:blank';
  title: string;
  status: number;
  detail?: string;
};

const defaultSuccessStatus = 200;

const defaultErrorStatus = 500;

type ResponseHeader = {
  'Content-Type': 'application/json';
  'X-Request-Id'?: string;
  'X-Lambda-Request-Id'?: string;
};

export const createSuccessResponse = (
  body: unknown,
  statusCode = defaultSuccessStatus,
  headers: ResponseHeader = { 'Content-Type': 'application/json' },
): Response => {
  const jsonBody = JSON.stringify(body);

  return new Response(jsonBody, { headers, status: statusCode });
};

export const createErrorResponse = (
  body: ProblemDetails,
  statusCode = defaultErrorStatus,
): Response => createSuccessResponse(body, statusCode);
