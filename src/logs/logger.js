import log from 'loglevel';
import remote from 'loglevel-plugin-remote';
import APIRequestHelper from '@utilities/api/api-request-helper';

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