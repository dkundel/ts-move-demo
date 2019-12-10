import { Request, Router } from 'express';
import { Response } from 'express-serve-static-core';

export const routes = Router();

export type Payload = {
  hello: 'world';
};

routes.get('/', (req: Request, res: Response<Payload>) => {
  res.send({
    hello: 'world',
  });
});
