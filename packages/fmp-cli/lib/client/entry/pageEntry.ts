import BaseEntry, { StyleType } from './baseEntry';

export default class Entry extends BaseEntry {
    private pages: Record<string, StyleType>;
    constructor() {
        super();
        this.init();
    }

    init() {
        const config = this.config;
        config.pages.forEach((page) => {
            this.pages[page.path] = page.style;
        })
        if (config.subpackages) {
            config.subpackages.forEach((subpackage) => {
                subpackage.pages.forEach((page) => {
                    this.pages[`${subpackage.root}/${page.path}`] = page.style;
                })
            })
        }
    }

    getEntry(name: string) {
        return this.pages[name];
    }
}