import Router from 'koa-router';
import { lintMd } from './lint';
import { ding } from './ding';

/**
 * 创建 router
 */
export const createRouter = (configure) => {
  const router = new Router();

  router.get('/', (ctx, next) => {
    ctx.body = '语雀 lint server!';
  });

// 处理逻辑！
  router.post('/:token', (ctx, next) => {
    const token = ctx.params.token;

    const title = ctx.request.body.data.title;
    const markdown = ctx.request.body.data.body;

    // 处理 lint
    const errors = lintMd(markdown, configure);

    // 钉钉消息
    ding(token, title, errors);

    ctx.body = 'Hello world!';
  });

  return router;
};
