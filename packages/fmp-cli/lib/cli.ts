import { program } from 'Commander';
import * as path from 'path';
import { build } from './builder';
import { setPlatform } from './platform';

const pkg = require(path.resolve(__dirname, '../../package.json'));

console.log(1231231);


export default () => {
    program.version(pkg.version);

    program
        .option('-d --dev', '启动开发环境')
        .option('-b --build', '构建')

    program
        .command('dev [source]')
        .description('启动本地开发环境')
        .action((source) => {
            setPlatform(source);
            build();
        })

    program
        .command('build')
        .description('启动本地编译')
        .action(() => {

        })


    program.parse(process.argv);
}