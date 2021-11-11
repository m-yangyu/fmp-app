export const useResult = async (ctx, next) => {
    await next();
    if (/.vue$/.test(ctx.req.url)) {
        ctx.body = ctx.vueDescriptor.script.content;
    }
}