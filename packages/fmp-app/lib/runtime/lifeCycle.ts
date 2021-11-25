const lifeCycle: Record<string, Function[]> = {};

export const addListenerLifeCycle = (name: string, callback: Function) => {
    if (!lifeCycle[name]) {
        lifeCycle[name] = [];
    }

    lifeCycle[name].push(callback);
}

export const triggerLifeCycle = (name: string) => {
    if (lifeCycle[name]) {
        lifeCycle[name].forEach((callback) => {
            callback();
        })
    }
}