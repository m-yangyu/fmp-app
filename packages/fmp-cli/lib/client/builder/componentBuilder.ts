import BaseBuilder, { BuilderOptionsType } from "./baseBuilder";

export default class ComponentBuilder extends BaseBuilder {
    constructor(options?: BuilderOptionsType) {
        super(options);

        this.buildOptions.type = 'Component';
        this.buildOptions.name = 'getComponentConfig'
    }
}