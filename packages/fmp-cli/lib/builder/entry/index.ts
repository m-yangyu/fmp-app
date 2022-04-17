import * as path from 'path';
import * as fs from 'fs-extra';
import { globalConfig } from "../../config";
import { getPlatform, PlatformType } from '../../platform';

export const getEntry = () => {
    const appConfig = fs.readJsonSync(globalConfig.appConfigPath);
    const { pages } = appConfig;
    const platform = getPlatform();
    const entry = {};
    
    if (pages) {
        const mainPages = pages;
        let main = path.join(globalConfig.source, 'main.ts');
        
        if (!fs.pathExistsSync(main)) {
            main = path.join(globalConfig.source, 'main.js');
        }

        if ([PlatformType.weixin].includes(platform)) {
            appConfig.subpackages?.forEach(sub => {
                const temp: string[] = [];
                sub.pages.forEach(page => temp.push(path.join(sub.root, page)));
                mainPages.push(...temp);
            });
        }
        mainPages.forEach((page) => (entry[page] = `${main}?${JSON.stringify({ page })}`));;
    }

    return entry;
}