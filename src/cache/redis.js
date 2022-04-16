/************* USING THIS LIBRARY FOR SERVER *************/

const redis = require("redis");

let redisClient = null;

const initializeRedis = () => {

    console.log('Initilazing Redis cache...');

    const REDIS_URL = process.env.REDIS_URL;
    
    if (REDIS_URL === undefined) {
        console.error("Please set the REDIS_URL environment variable.");
        //process.exit(1);
    }

    if (REDIS_URL && REDIS_URL.startsWith("rediss://")) {
        redisClient = redis.createClient(REDIS_URL, {
            tls: { servername: new URL(REDIS_URL).hostname }
        });
    } else if (REDIS_URL) {
        redisClient = redis.createClient(REDIS_URL);
    }
}

const get = (key, callback) => {
    if (typeof callback != 'function') {
        return;
    }

    if (!key) {
        callback({
            error: '',
            data: {}
        });
    }
    if (!redisClient) {
        initializeRedis();
    }

    redisClient.get(key, (err, data) => {
        if (err) {
            console.log('*** error when retrieving redis cached data for api: \'' + key + '\'.');

            callback({
                error: err,
                data: {}
            });
        }
        else if (data) {
            console.log('*** retrieve redis cached data for api: \'' + key + '\'.');
            callback({
                error: '',
                data: data
            });
        }
    });
}

const set = (key, data) => {
    if(!redisClient) {
        initializeRedis();
    }
}

module.exports = {
    get,
    set
};