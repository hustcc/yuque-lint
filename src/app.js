import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { middleware } from './middleware';
import { createRouter } from './router';

export const createApp = configure => {
  // 服务器
  const app = new Koa();

  // 中间件
  for (const mid of middleware) {
    app.use(mid);
  }

  const router = createRouter(configure);

  app.use(bodyParser());

  app
    .use(router.routes())
    .use(router.allowedMethods());

  // start
  // app.listen(3000);
  return app;
};

