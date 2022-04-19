import { program } from 'Commander';
import * as path from 'path';
import { build } from './builder';
import { setPlatform } from './platform';
import * as defaltPlugins from './plugin';

import CommandContext from './helper/command/context';

const pkg = require(path.resolve(__dirname, '../../package.json'));

program.version(pkg.version);

const context = new CommandContext(program);

export default () => {

    for (let key in defaltPlugins) {
        const plugin = defaltPlugins[key];
        if (plugin.type === defaltPlugins.IPluginType.Command) {
            plugin.register(context);
        }
    }

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
            console.log(999);
        })

    program.parse(process.argv);
}