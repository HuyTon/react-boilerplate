import React from 'react';
import ReactDOM from 'react-dom';
import '@appbaseio/reactivesearch/dist/css/style.min.css';

import './index.css';
import ReactiveSearch from '../views/reactive-search';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();