import { AppEntry, PageEntry } from "./entry";
import { AppBuilder, PageBuilder, ComponentBuilder } from "./builder";

const buildApp = () => {
    const appEntry = new AppEntry();
    new AppBuilder({ path: appEntry.appPath }).build();
}

const buildPage = () => {
    const pageEntry = new PageEntry();
    Object.keys(pageEntry.pages).forEach(pageName => {
        new PageBuilder({ path: pageName }).build();
    });
}

const buildComponent = () => {
    new ComponentBuilder().build();
}

export const createClient = () => {
    buildApp();
    buildPage();
    buildComponent();
}