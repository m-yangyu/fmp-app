import * as fs from 'fs-extra';
import { globalConfig } from "../../config";
import { getPlatform, PlatformType } from '../../platform';

export const getEntry = () => {
    const appConfig = fs.readJsonSync(globalConfig.appConfigPath);
    const { pages } = appConfig;
    const platform = getPlatform();
    if (pages) {
        if (platform === PlatformType.weixin) {
            
        }
    }
}