import * as inlineCss from 'inline-css';

enum STYLE_PARSER {
    css = 'css',
    less = 'less',
    scss = 'scss',
}

interface StyleType {
    type: string;
    content: string;
    loc: any;
    attrs: any;
    lang: string;
}

export interface Less2CssStyle {
    css: string;
    imports: string[];
}

const getCssParser = (styleName: STYLE_PARSER) => {
    try {
        return require(STYLE_PARSER[styleName]);
    } catch (err) {
        throw new Error(err);
    }
}

export const lessParser = (style: StyleType) => {
    const nodeLess = getCssParser(STYLE_PARSER.less);
    return nodeLess.render(style.content);
}

export const scssParser = (style: StyleType) => {

}

export const cssParser = (style: StyleType) => {

}

export const cssInDomStyle = async (descriptor) => {
    const { template, styles } = descriptor;
    const cssStyles: Less2CssStyle[] = await Promise.all(styles.map((style) => {
        switch (style.lang) {
            case STYLE_PARSER.css:
                return cssParser(style);
            case STYLE_PARSER.scss:
                return scssParser(style);
            case STYLE_PARSER.less:
                return lessParser(style);
            default:
                return style;
        }
    }));
    descriptor.template.content = await inlineCss(`
    ${template.content}
    <style>${cssStyles.reduce((acc, cur) => acc + cur.css, '')}</style>
    `, { url: '/' });
}