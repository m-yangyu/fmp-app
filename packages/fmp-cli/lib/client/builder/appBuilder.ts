import BaseBuilder, { BuilderOptionsType } from "./baseBuilder";

export interface AppBuilderOptionsType extends BuilderOptionsType {

}

export default class AppBuilder extends BaseBuilder {
    constructor(options: AppBuilderOptionsType) {
        super(options);
        this.buildOptions.type = 'App';
        this.buildOptions.name = 'getAppConfig';
        this.isApp = true;
    }
}