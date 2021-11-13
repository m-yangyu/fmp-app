import BaseEntry from './baseEntry';

export default class PageEntry extends BaseEntry {
    
    constructor() {
        super();
    }

    getEntry(name: string) {
        return this.pages[name];
    }
}