import { createMessage } from '../feature';

export const config = {
  runtime: 'experimental-edge',
}

export default async (req: Request) => {
  const body = {
    message: createMessage('other api'),
  };

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'content-type': 'application/json'
    }
  })
}