let currentPage = null;
let currentComponent = null;
let currentApp = null;

export const setCurrentPage = (instance: any) => {
    currentPage = instance;
}

export const setCurrentComponent = (instance: any) => {
    currentComponent = instance;
}

export const setCurrentApp = (instance: any) => {
    currentApp = instance;
}

export const getCurrentPage = () => {
    return currentPage;
}

export const getCurrentComponent = () => {
    return currentComponent;
}

export const getCurrentApp = () => {
    return currentApp;
}

export const unsetCurrentPage = () => {
    currentPage = null;
}

export const unsetCurrentComponent = () => {
    currentComponent = null;
}

export const unsetCurrentApp = () => {
    currentApp = null;
}