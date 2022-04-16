import log from 'loglevel';
import remote from 'loglevel-plugin-remote';
import APIRequestHelper from '../utils/api/api-request-helper';

// const customJSON = log => ({
//     msg: log.message,
//     level: log.level.label,
//     stacktrace: log.stacktrace
// });
// remote.apply(log, { format: customJSON, url: '/logger' });

const api = process.env.REACT_APP_LOG_API;
const url = api.indexOf('http') == 0 ? api :
            api.indexOf('/') == 0 ? 
            APIRequestHelper.baseEndpoint + api :
            APIRequestHelper.baseEndpoint + '/' + api;

remote.apply(
    log,
    {
        url: url
    }
);
log.enableAll();

export default log;