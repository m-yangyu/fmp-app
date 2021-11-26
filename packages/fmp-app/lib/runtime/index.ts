import * as Vue from 'vue';
import { createApp } from './renderer';
import { getOptionsByRequest } from '../utils';

// export interface APPInstanceType extends Vue.DefineComponent {
//     onLaunch?: (options: Record<string, any>) => void;
//     onShow?: (options: Record<string, any>) => void;
//     onHide?: () => void;
//     onError?: (msg: string) => void;
//     globalData?: Record<string, any>;
// };

export interface PageInstanceType extends Vue.App {
    onLoad?: (options: Record<string, any>) => void;
    onShow?: () => void;
    onReady?: () => void;
    onHide?: () => void;
    onUnload?: () => void;
    onPullDownRefresh?: () => void;
    onReachBottom?: () => void;
    onShareAppMessage?: () => any;
    onPageScroll?: () => void;
    onResize?: () => void;
    onTabItemTap?: () => void;
    onShareTimeline?: () => void;
}

export const getPageConfig = async (path: string) => {
    const instance: PageInstanceType = createApp(await getOptionsByRequest(path));
    return {
        data: {
            text: "This is page data."
        },
        onLoad: function(options) {
            // 页面创建时执行
            instance.onLoad && instance.onLoad(options);
        },
        onShow: function() {
            // 页面出现在前台时执行
            instance.onShow && instance.onShow();
        },
        onReady: function() {
            // 页面首次渲染完毕时执行
            instance.onReady && instance.onReady();
        },
        onHide: function() {
            // 页面从前台变为后台时执行
            instance.onHide && instance.onHide();
        },
        onUnload: function() {
            // 页面销毁时执行
            instance.onUnload && instance.onUnload();
        },
        onPullDownRefresh: function() {
            // 触发下拉刷新时执行
            instance.onPullDownRefresh && instance.onPullDownRefresh();
        },
        onReachBottom: function() {
            // 页面触底时执行
            instance.onReachBottom && instance.onReachBottom();
        },
        onShareAppMessage: function () {
            // 页面被用户分享时执行
            instance.onShareAppMessage && instance.onShareAppMessage();
        },
        onShareTimeline() {
            // 用户点击右上角转发到朋友圈
            instance.onShareTimeline && instance.onShareTimeline();
        },
        onPageScroll: function() {
            // 页面滚动时执行
            instance.onPageScroll && instance.onPageScroll();
        },
        onResize: function() {
            // 页面尺寸变化时执行
            instance.onResize && instance.onResize();
        },
        onTabItemTap(item) {
            // tab 点击时执行
            instance.onTabItemTap && instance.onTabItemTap();
        },
    }
}

export const getComnponentConfig = (path: string) => {

}

export const getAppConfig = async (path: string) => {
    // 模拟写下
    const app = createApp(await getOptionsByRequest(path));
    // 获取到当前app的对应的组件应用实例
    const instance: any = app._component;
    // mount执行会返回对应组件的this指向
    const publicThis = app.mount(instance.name || path);
    return {
        onLaunch (options) {
            instance.onLaunch && instance.onLaunch(options);
        },
        onShow (options) {
            instance.onShow && instance.onShow(options);
        },
        onHide () {
            instance.onHide && instance.onHide();
        },
        onError (msg) {
            instance.onError && instance.onError(msg);
        },
        globalData: instance.globalData,
    }
}