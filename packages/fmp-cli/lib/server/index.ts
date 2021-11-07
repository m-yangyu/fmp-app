import Koa from 'koa';
import * as koaStatic from 'koa-static';
import * as http from 'http';

const app = new Koa();
app.use(async (ctx, next) => {
    await next;
})
app.use(koaStatic(process.cwd(), {
    setHeaders: (res, path) => {
        if (/\.[tj]sx?$/.test(path)) {
            res.setHeader('Content-Type', 'application/javascript;charset=utf-8')
        }
    }
}));

export const createServer = () => {
    http.createServer(app.callback()).listen(3000, () => {
        console.log('服务启动成功');
    });
}