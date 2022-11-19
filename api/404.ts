import { notFoundHandler } from '../src/notFoundHandler';

export const config = {
  runtime: 'experimental-edge',
}

export default async (req: Request) => {
  return notFoundHandler(req);
}
