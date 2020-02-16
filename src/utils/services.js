/**
 * single service call
 */
export const fetch = service =>
    new Promise((resolve, reject) => {
        try {
            const response = fetch(service.url, service.params);
            const result = response.json();

            resolve(result);
        } catch (err) {
            reject(err);
        }
    });

/**
 * execute list of services in parallel (async)
 */
export const fetchMultiAsync = async services => {
    const promises = await Promise.all(
        services.map(async service => {
            const result = fetch(service);
            return result;
        }),
    );

    return promises;
};

/**
 * execute list of services in sequential (sync)
 */
export const fetchMultiSync = async services => {
    let promises = [];
    for (let i = 0; i < services.length; i++) {
        // eslint-disable-next-line no-await-in-loop
        const result = await fetch(services[i]);
        promises = [...promises, result];
    }
    return promises;
};
