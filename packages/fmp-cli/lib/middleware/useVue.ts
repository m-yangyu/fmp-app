import { readStream } from '../utils/index';
import * as compiler  from '@vue/compiler-sfc';
import { baseCompile } from '@vue/compiler-core';
import { cssInDomStyle } from '../parser';
// import { vueParser } from "lib/parser";

export const useVue = async (ctx, next) => {
    await next();
    if (ctx.body && /.vue$/.test(ctx.req.url)) {
        const { vueContext: context } = ctx;
        const result = await readStream(ctx.body) as string;
        const { descriptor } = compiler.parse(result, {
            filename: context.filename,
            sourceMap: false,
        })
        await cssInDomStyle(descriptor);
        const { code } = baseCompile(descriptor.template?.content as string);
        const render = new Function(code);
        
        // todo: 解析js成ast， 获取他的import引入的组件
        // todo：render的方法写入到js的export的options当中
        // todo：所有的组件改为同一个组件模板，添加name参数做组件的区分


        console.log(descriptor);
        ctx.vueDescriptor = descriptor;
    }
}