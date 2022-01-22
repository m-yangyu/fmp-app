import weixin from './weixin';

export enum PlatformType {
    h5 = 'h5',
    weixin = 'fmp-weixin',
    alipay = 'fmp-alipay'
}

export default {
    [PlatformType.weixin]: weixin,
}