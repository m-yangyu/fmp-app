const lifeCycle: Map<any, Map<string, Function>> = new Map();

export const setLifeCycle = (key: any, name: string, cb: Function) => {
    if (lifeCycle.has(key)) {
        const currentInstanceMap = lifeCycle.get(key) as Map<string, Function>;
        currentInstanceMap.set(name, cb);
    } else {
        lifeCycle.set(key, new Map().set(name, cb));
    }
}

export const triggerLifeCycle = (key: any, name: string) => {
    const currentInstanceMap = lifeCycle.get(key);
    if (currentInstanceMap) {
        const cb = currentInstanceMap.get(name);
        cb && cb();
    }
}