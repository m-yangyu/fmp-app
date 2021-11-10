import Koa from 'koa';
import * as koaStatic from 'koa-static';
import * as http from 'http';
import { useVue, useContext, useResult } from '../middleware';

const app = new Koa();

app.use(useResult)
app.use(useContext);
app.use(useVue);
app.use(koaStatic(process.cwd(), {
    setHeaders: (res, path) => {
        if (/\.[tj]sx?$|.vue$/.test(path)) {
            res.setHeader('Content-Type', 'application/javascript;charset=utf-8')
        }
    }
}));

export const createServer = () => {
    http.createServer(app.callback()).listen(3000, () => {
        console.log('服务启动成功');
    });
}