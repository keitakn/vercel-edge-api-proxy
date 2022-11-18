import {indexHandler} from '../src/indexHandler';

export const config = {
  runtime: 'experimental-edge',
}

export default async (req: Request) => {
  return indexHandler(req);
}
