/**
 * create delay
 * @param {number} delay time in milliseconds
 */
export const sleep = delay =>
    new Promise(resolve =>
        setTimeout(() => {
            console.log(`sleep ${delay} ms`);
            resolve();
        }, delay),
    );

export default {};
