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
${type}(${name}('${path}'))`;
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
        const jsContent = this.getJsContent();
        const template = '<template></template>';

        this.write(path.join(this.root, 'dist', `${filePath}.js`), jsContent);
        if (!this.isApp) {
            this.write(path.join(this.root, 'dist', `${filePath}.wxml`), template);
        }
        this.write(path.join(this.root, 'dist', `${filePath}.json`), JSON.stringify(json));
    }
}