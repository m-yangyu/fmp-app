import { AppEntry, PageEntry } from "./entry";
import { AppBuilder, PageBuilder, ComponentBuilder } from "./builder";

const buildApp = () => {
    const appEntry = new AppEntry();
    new AppBuilder({ path: appEntry.appPath }).build(appEntry.getEntry());
}

const buildPage = () => {
    const pageEntry = new PageEntry();
    Object.keys(pageEntry.pages).forEach(pageName => {
        new PageBuilder({ path: pageName }).build(pageEntry.getEntry(pageName));
    });
}

const buildComponent = () => {
    new ComponentBuilder({ path: 'components/common' }).build();
}

export const createClient = () => {
    buildApp();
    buildPage();
    buildComponent();
}