import BaseEntry from "./baseEntry";

export default class AppEntry extends BaseEntry {
    constructor() {
        super();
    }

    getEntry() {
        const config = this.config;
        config.pages = config.pages.map((page) => page.path);

        if (config.subpackages) {
            config.subpackages = config.subpackages.map((subpackage) => ({
                root: subpackage.root,
                name: subpackage.name || subpackage.root,
                pages: subpackage.pages.map((page) => page.path)
            }))
        }

        return config;
    }
}