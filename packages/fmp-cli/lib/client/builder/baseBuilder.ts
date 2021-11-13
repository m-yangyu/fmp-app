import * as fs from 'fs-extra';
import * as path from 'path';
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

    getJsContent() {
        const { name, type, path } = this.buildOptions;
        return `import { ${name} } from '@fmp-app';
${type}(${name}(${path}))`;
    }

    write(path: string, content: string) {
        // const pathArr = path.split('/');
        // pathArr.pop();
        // const dir = pathArr.join('/');
        // console.log(fs.pathExistsSync(path));


        // if (!fs.pathExistsSync(dir)) {
        //     fs.mkdirsSync(dir);
        // }
        fs.writeFile(path, content);
    }

    build(json?: any) {
        const { path: filePath } = this.buildOptions;
        const jsContent = this.getJsContent();
        const template = '<template></template>';

        fs.emptyDirSync(path.join(this.root, 'dist'));

        this.write(path.join(this.root, 'dist', `${filePath}.js`), jsContent);
        // if (!this.isApp) {
        //     this.write(path.join(this.root, 'dist', `${filePath}.wxml`), template);
        // }
        // json && this.write(path.join(this.root, 'dist', `${filePath}.json`), JSON.stringify(json));
    }
}