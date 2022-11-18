import { Router } from 'itty-router';

import {
  handleNotFound,
} from '../src/handler';

export const config = {
  runtime: 'experimental-edge',
}

export const router = Router();

router.all('*', handleNotFound);
