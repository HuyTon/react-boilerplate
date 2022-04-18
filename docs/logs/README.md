# Logger

Import logger:

```
import log from '@logs/logger';
```

Using logger:

- **log.info('[MESSAGE]'):** Send infomation and save to log file on server
- **log.error('[MESSAGE]'):** Send error details and save to log file on server
- **log.warn('[MESSAGE]'):** Send warning message and save to log file on server

## Customize Log

```
const customJSON = log => ({
    msg: log.message,
    level: log.level.label,
    stacktrace: log.stacktrace
});

remote.apply(log, { format: customJSON, url: '/logger' });
```