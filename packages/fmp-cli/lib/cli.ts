import { program } from 'Commander';
import * as path from 'path';
import { createServer } from './server';
import { createClient } from './client';

const pkg = require(path.resolve(__dirname, '../../package.json'));

export default () => {
    program.version(pkg.version);

    program
        .option('-d --dev', '启动开发环境')
        .option('-b --build', '构建')

    program
        .command('dev [source]')
        .description('启动本地开发环境')
        .action((source) => {
            // dev 开发
            createServer();
            createClient();
        })

    program
        .command('build')
        .description('启动本地编译')
        .action(() => {
            // build 编译
        })


    program.parse(process.argv);
}