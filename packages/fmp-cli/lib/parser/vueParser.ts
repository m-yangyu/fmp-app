import { baseCompile, baseParse } from '@vue/compiler-core';
import { cssInDomStyle } from '../parser';
// import { init, parse } from 'es-module-lexer';

export const vueParser = async (descriptor) => {
    // await init;
    await cssInDomStyle(descriptor);

    // 先放着不动，后续在用，获取到模块的引用路径
    // const scriptContent = descriptor.script.content;
    // const [ imports ] = parse(scriptContent);
    // const importComponents: string[] = [];
    // imports.forEach((imp) => {
    //     importComponents.push(scriptContent.substring(imp.ss + 6, imp.s - 6).trim());
    // });
    // const ast = baseParse(descriptor.template?.content as string);

    const { code } = baseCompile(descriptor.template?.content as string);

    const scriptContentArr = descriptor.script.content.split('\n');

    let exportDefaultIndex = 0;

    for (let i = 0; i < scriptContentArr.length; i++) {
        if (/export default/.test(scriptContentArr[i])) {
            exportDefaultIndex = i;
            break;
        }
    }

    scriptContentArr.splice(exportDefaultIndex + 1, 0, `render: (new Function(${code})()),`);

    descriptor.script.content = scriptContentArr.join('\n');
}