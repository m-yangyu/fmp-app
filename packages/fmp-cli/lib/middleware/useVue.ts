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
        console.log(descriptor);
        ctx.vueDescriptor = descriptor;
    }
}