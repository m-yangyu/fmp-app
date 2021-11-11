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

    descriptor.script.content = descriptor.script.content.replace('export default', 'const _fmp_script = ');

    descriptor.script.content += `
_fmp_script.render = (new Function(${code})())
`;
}