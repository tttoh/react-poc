import { validateUrl, validateEmail } from './validation';
import { fetch, fetchMultiAsync, fetchMultiSync } from './services';
import { API_FETCH_SAMPLE_DATA } from './constant';
import { sleep } from './common';

export default {
    validateUrl,
    validateEmail,
    fetch,
    fetchMultiAsync,
    fetchMultiSync,
    API_FETCH_SAMPLE_DATA,
    sleep,
};
