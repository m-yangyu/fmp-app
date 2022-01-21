import * as compiler  from '@vue/compiler-sfc';

export const compilerVue = (vueFile: string, {
    filename
}: {
    filename: string
}) => {
    const { descriptor } = compiler.parse(vueFile, {
        filename,
        sourceMap: false,
    })

    return descriptor;
}