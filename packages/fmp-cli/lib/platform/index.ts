import metas, { PlatformType } from './meta';

let currentPlatform: PlatformType = PlatformType.h5;

export { PlatformType } from './meta';


export const getPlatform = () => {
    return currentPlatform;
}

export const setPlatform = (platform: PlatformType) => {
    if (platform) {
        currentPlatform = platform; 
    }
}

export const getPlatformMeta = () => {
    return metas[currentPlatform];
}