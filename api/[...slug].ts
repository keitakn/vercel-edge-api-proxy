import { Hono } from 'hono';

const app = new Hono();

app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello Hono!' });
});

app.all('*', (c) => {
  return c.json({ message: '404 Not Found by Hono' });
});

export default async (req: Request) => {
  return app.request(req);
}

export const config = {
  runtime: 'experimental-edge',
}
