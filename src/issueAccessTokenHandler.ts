import { createSuccessResponse } from './handler';

export const issueAccessTokenHandler = async (request: Request): Promise<Response> => {
  const status = 200;

  const responseBody = {
    jwtString: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  };

  return createSuccessResponse(responseBody, status);
};
