import metas from './meta';

export type PlatformType = 'h5' | 'mp-weixin' | 'mp-alipay'; 

let currentPlatform: PlatformType = 'h5';

export const getPlatform = () => {
    return currentPlatform;
}

export const setPlatform = (platform: PlatformType) => {
    currentPlatform = platform; 
}

export const getPlatformMeta = () => {
    return metas[currentPlatform];
}