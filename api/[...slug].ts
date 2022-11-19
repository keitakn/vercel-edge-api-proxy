import { Hono } from 'hono';

const app = new Hono();

app.all('/', (c) => {
  return c.json({ message: 'Hello Hono! Index!' });
});

app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello Hono!' });
});

app.get('/api/hello/world', (c) => {
  return c.json({ message: 'Hello Hono world!' });
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
