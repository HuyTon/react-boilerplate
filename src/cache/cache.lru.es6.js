/************* USING THIS LIBRARY FOR SERVER *************/
// NOTE: THIS LIBRARY MAY NOT BE APPLY TO CLIENT FRONT END
// DUE TO ISSUE OF ES6. THE LIB UGLIFYJS DOES NOT SUPPORT
// ES6 NOW.  

const lru = require('lru-cache');

const memCache = new lru({
    // maxAge sets a time-based expiration for values stored in the cache.
    maxAge: 1000 * 60 * 60, // maxAge is in ms
    // max is the total allowed length of all items in the cache.
    // max The maximum size of the cache, checked by applying the length 
    // function to all values in the cache. Not setting this is kind of silly, 
    // since that's the whole purpose of this lib, but it defaults to Infinity. 
    // Setting it to a non-number or negative number will throw a TypeError. 
    // Setting it to 0 makes it be Infinity.
    max: 500000000000,
    // length is the individual max allowed length for each value added.
    length: (n) => {
        // n = item passed in to be saved (value)
        return n.length * 100;
    }
});

const set = (key, value) => {
    console.log('*** setting memory cache data for api \'' + key + '\'.');
    memCache.set(key, value);
};

const get = (key) => {
    if (memCache.has(key)) {
        console.log('*** retrieve memory cached data for api \'' + key + '\'.');
    }
    return memCache.get(key);
};

module.exports = {
    get,
    set
};
