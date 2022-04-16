import memCache from '../../cache/client.cache';
import { isEmpty } from "lodash";

/********** Process api base endpoint **********/
let baseEndpoint = process.env.REACT_APP_LOCAL_END_POINT;
if (process.env.NODE_ENV == "production") {
    baseEndpoint = window.location.href;

    if (window.location.pathname != '/') {
        baseEndpoint = baseEndpoint.replace(window.location.pathname, '');
    }
}
if (baseEndpoint[baseEndpoint.length - 1] == '/') {
    baseEndpoint = baseEndpoint.slice(0, -1); // Remove the last character '/'
}
/********** End of process api base endpoint **********/

const executeRequest = async function (api, requestBody = {}) {
    
    return internalExecuteRequest(api, requestBody, false);
};

const executeRequestWithCache = async function (api, requestBody = {}) {
    
    // Execute request with function caching.
    // Function caching, or just caching means the use of 
    // memoization in order to save processing time in our 
    // programs. Memoization is a programming technique 
    // which attempts to increase a function’s performance 
    // by caching its previously computed results.
    return internalExecuteRequest(api, requestBody, true);
};

const internalExecuteRequest = async function (api, requestBody = {}, allowCache = false) {

    // Validate api endpoint
    if (!api) return;

    // Process api endpoint
    let apiEndpoint = api.indexOf('http') == 0 ? api :
        api.indexOf('/') == 0 ? baseEndpoint + api :
            baseEndpoint + '/' + api;

    if (allowCache) {
        // Check cached data existing
        const cachedEndpoint = memCache.get(apiEndpoint);
        if (cachedEndpoint) {
            return cachedEndpoint;
        }
    }

    // Define header options
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
    };

    // Process api authorization
    if (sessionStorage.getItem("api_auth_token")) {
        headers["Authorization"] = sessionStorage.getItem("api_auth_token");
    }

    // Process Http method and request body
    let body = {};
    let httpMethod = 'GET';
    if (!isEmpty(requestBody)) {
        httpMethod = 'POST';
        body = {
            body: JSON.stringify(requestBody)
        };
    }

    // Need to provide api endpoint through proxy of webpack
    // to avoid CORS policy issue. Besides, do not turn on
    // mode 'no-cors' to avoid lost request header information
    const rawResponse = await fetch(apiEndpoint,
        {
            method: httpMethod,
            //mode: 'no-cors',
            headers: headers,
            ...body
        })
        .then(response => {
            return response.text()
        })
        .then((data) => {
            return data ? JSON.parse(data) : {};
        })
        .catch(err => {
            console.error(err);
        });

    if (allowCache) {
        // Cache endpoint
        memCache.set(apiEndpoint, rawResponse);
    }

    return rawResponse;
};

const APIRequestHelper = {
    baseEndpoint: baseEndpoint,
    executeRequest: executeRequest,
    executeRequestWithCache: executeRequestWithCache
}

export default APIRequestHelper;
