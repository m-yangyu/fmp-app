import { getCurrentApp } from "../instance";
import { setLifeCycle } from "./lifeCycle";

export const onLaunch = (callback: Function) => {
    const app = getCurrentApp();
    setLifeCycle(app, 'onLaunch', callback);
}

export const onError = (callback: Function) => {
    const app = getCurrentApp();
    setLifeCycle(app, 'onError', callback);
}