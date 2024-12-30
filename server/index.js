const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(cors()); // 添加CORS中间件

// 定义 /test 接口
router.post('/test', ctx => {

  const delay = Math.floor(Math.random() * 5000) + 1000; // 随机延迟1-5秒
  return new Promise(resolve => {
    setTimeout(() => {
      ctx.body = {
        data: ctx.request.body
      };
      resolve();
    }, delay);
  });
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});