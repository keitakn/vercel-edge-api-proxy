import { issueAccessTokenHandler } from '../../src/issueAccessTokenHandler';

export const config = {
  runtime: 'experimental-edge',
}

export default async (req: Request) => {
  return issueAccessTokenHandler(req);
}
