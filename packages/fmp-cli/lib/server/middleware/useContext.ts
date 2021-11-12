export interface VueContext {
    filename: string;
    url: string;
}

export const useContext = async (ctx, next) => {
    const { req } = ctx;
    const { url } = req;
    let vueContext = {} as VueContext;

    if (/\/([^\s]*).vue$/.test(url)) {
        vueContext.url = url;
        vueContext.filename = RegExp.$1;
    }
    ctx.vueContext = vueContext;
    await next();
}