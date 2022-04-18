/********** USING THIS LIBRARY FOR CLIENT **********/

import { LRUMap } from './client.cache.lru';

let clientMemCache = new LRUMap(500); // Set the size of cache are 500 items

export const set = (key, value) => {
    console.log('*** setting memory cache data for api \'' + key + '\'.');
    clientMemCache.set(key, value);
};

export const get = (key) => {
    if (clientMemCache.has(key)) {
        console.log('*** retrieve memory cached data for api \'' + key + '\'.');
    }
    return clientMemCache.get(key);
};

export default {
    get,
    set
};