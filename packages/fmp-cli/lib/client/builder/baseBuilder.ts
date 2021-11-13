export interface BuilderOptionsType {
    path: string;
    name?: string;
    type?: string;
}

export default class BaseBuilder {
    protected buildOptions: BuilderOptionsType

    constructor(options?: BuilderOptionsType) {
        this.buildOptions = options || {} as BuilderOptionsType;
    }

    build() {
        const { name, type, path } = this.buildOptions;
        return `import { ${name} } from '@fmp-app';
${type}(${name}(${path}))`;
    }
}