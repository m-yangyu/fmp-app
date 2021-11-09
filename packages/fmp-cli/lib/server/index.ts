import Koa from 'koa';
import * as koaStatic from 'koa-static';
import * as http from 'http';
import { readStream } from '../utils/index';
import * as compiler  from '@vue/compiler-sfc';
import * as inlineCss from 'inline-css';

const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    if (ctx.body) {
        const result = await readStream(ctx.body);
        const source = `
<template>
    <div id="foo" :class="bar.baz">
        {{ world.burn() }}
        <div class="c" v-if="ok">yes</div>
        <template v-else>no</template>
        <div v-for="(value, index) in list"><span>{{ value + index }}</span></div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';

export defalt defineComponent({
    setup() {
        return {};
    }
});
</script>
<style lang="scss">
#foo {
    color: #fff;
}
#foo .c:before{
    background: #fff;
}
</style>
    `.trim()
        const { descriptor } = compiler.parse(source, {
            filename: 'text.vue',
            sourceMap: false,
        })

        descriptor.template = await inlineCss(`
        ${descriptor.template?.content}
        <style>${descriptor.styles}</style>
        `, { url: '/' });
        console.log(descriptor);

        ctx.body = result;
    }
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