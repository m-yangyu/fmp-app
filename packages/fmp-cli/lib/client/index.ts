import { AppEntry, PageEntry } from "./entry";
import { AppBuilder, PageBuilder, ComponentBuilder } from "./builder";
import * as fs from 'fs-extra';
import * as path from 'path';

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
    new ComponentBuilder({ path: 'components/common' }).build({
        component: true,
        usingComponents: {
            myComponent: '/components/common',
        }
    });
}

const clearDist = () => {
    fs.emptyDirSync(path.join(process.cwd(), 'dist'));
}

export const createClient = () => {
    clearDist();
    buildApp();
    buildPage();
    buildComponent();
}