import BaseBuilder from "./baseBuilder";

export default class PageBuilder extends BaseBuilder {
    constructor(options) {
        super(options);
        this.buildOptions.type = 'Page';
        this.buildOptions.name = 'getPageConfig';
    }
}