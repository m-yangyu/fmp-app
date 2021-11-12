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
    constructor() {
        this.root = process.cwd();
        this.file = 'src/page.config.json';
        this.config = require(`${this.root}/${this.file}`);
    }
}