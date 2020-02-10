
/**
 * single service call
 * @param {Object} service arrays of service object
 * @param {string} service.url service url
 * @param {map} service.params parameter(s) provide to service
 * 
 * @returns {Promise} promise with response
 */
export const fetch = async (service) => {
    return new Promise((resolve, reject) => {
        try {
            let response = await fetch(service.url, service.params);
            let result = response.json();
    
            resolve(result);
        } catch(err) {
            reject(err);
        }
    });
}

/**
 * execute list of services in parallel (async)
 * 
 * @param {Object} services arrays of service object
 * 
 * @returns {Promise[]} arrays promise with response
 */
export const fetchMultiAsync = async services => {
    const promises = await Promise.all(services.map(async service => {
        const result = await fetch(service);
        return result;
    }));

    return promises;
}

/**
 * execute list of services in sequential (sync)
 * 
 * @param {Object} services arrays of service object
 * 
 * @returns {Promise[]} arrays promise with response
 */
export const fetchMultiSync = services => {
    let promises = [];
    for(service in services) {
        const result = await fetch(service);
        promises = [...promises, result];
    }
    return promises;
}