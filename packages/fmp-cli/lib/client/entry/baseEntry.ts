import * as path from 'path';

export interface StyleType {
    navigationBarBackgroundColor?: string; // #000000
    navigationBarTextStyle?: string; // white
    navigationBarTitleText?: string; // ''
    navigationStyle?: string; // default
    backgroundColor?: string; // #ffffff
    backgroundTextStyle?: string; // dark
    backgroundColorTop?: string; // #ffffff
    backgroundColorBottom?: string; // #ffffff
    enablePullDownRefresh?: boolean; // false
    onReachBottomDistance?: number; // 50
    pageOrientation?: string; // protrait
    disableScroll?: boolean; // false
    usingComponents?: string;
    initialRenderingCache: string; // ''
    style: string; // default
    singlePage?: {
        navigationBarFit?: string;
    };
    restartStrategy?: string; // homePage
};

export interface PageConfigType {
    pages: {
        path: string;
        style?: StyleType;
    }[] | string[],
    [key: string]: any;
}

export default class BaseEntry {
    protected root: string;
    protected file: string;
    protected config: PageConfigType;
    protected source: string;

    public appPath: string;
    public pages: Record<string, StyleType>;

    constructor() {
        this.root = process.cwd();
        // this.source = `${this.root}/src/`;
        this.source = path.join(this.root, 'src');
        this.file = 'page.config.json';
        this.config = require(`${this.source}/${this.file}`);
        this.appPath = '';
        this.pages = {};
        this.init();
    }

    init() {
        const config = this.config;
        config.pages.forEach((page) => {
            this.pages[page.path] = page.style;
        })
        if (config.subpackages) {
            config.subpackages.forEach((subpackage) => {
                subpackage.pages.forEach((page) => {
                    this.pages[`${subpackage.root}/${page.path}`] = page.style;
                })
            })
        }
    }
}