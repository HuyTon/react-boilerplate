# Universal Cookies

Sample for accessing cookies on the server—src/shared/app-action-creators.es6:
```
import UAParser from 'ua-parser-js';
import cookies from './cookies.es6';

export const PARSE_USER_AGENT = 'PARSE_USER_AGENT';
export const STORE_USER_ID = 'STORE_USER_ID';

export function parseUserAgent(requestHeaders) {}

export function storeUserId(requestHeaders) {
  const userId = cookies.get('userId', requestHeaders);
  return {
    userId,
    type: STORE_USER_ID
  };
}

export default {
  parseUserAgent,
  storeUserId
};
```