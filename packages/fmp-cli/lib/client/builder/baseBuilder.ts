import * as fs from 'fs-extra';
import * as path from 'path';
import { compilerVue } from '../compiler';
export interface BuilderOptionsType {
    path: string;
    name?: string;
    type?: string;
}

export default class BaseBuilder {
    protected buildOptions: BuilderOptionsType
    protected root: string;
    protected isApp: boolean;

    constructor(options?: BuilderOptionsType) {
        this.buildOptions = options || {} as BuilderOptionsType;
        this.root = process.cwd();
        this.isApp = false;
    }

    write(pathname: string, content: string) {
        const dir = path.dirname(pathname);
        if (!fs.pathExistsSync(dir)) {
            fs.mkdirsSync(dir);
        }
        fs.writeFile(pathname, content);

    }

    build(json?: any) {
        const { path: filePath } = this.buildOptions;
        const filename = `${filePath}.vue`;
        const vueContent = fs.readFileSync(filename, 'utf-8')
        const { template, script, styles } = compilerVue(vueContent, { filename });
        console.log(template, script, styles);
    }
}