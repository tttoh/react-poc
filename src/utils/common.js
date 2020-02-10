
/**
 * create delay
 * @param {number} delay time in milliseconds 
 */
export const sleep = async (delay) => {
    return await new Promise(resolve => setTimeout(() => {
        console.log(`sleep ${delay} ms`);
        resolve();
    }, delay));
}