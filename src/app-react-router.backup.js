import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Async from 'react-code-splitting';
// import './assets/css/app.css';

// Layouts
import LeftNav from './layouts/left-nav';

// Pages
import SearchLayoutContainer from './pages/search/containers/search-layout-container';
import UserProfileContainer from './pages/user/containers/user-profile-container';

// Pages
/* Dynamic Imports for Lazy-loaded Modules */
const Home = () => (<Async load={import('./pages/home')} />);
const TestingComponent = () => (<Async load={import('./pages/testingComponent')} />);
const DemoComponent = () => (<Async load={import('./pages/demoComponent')} />);
const CounterContainer = () => (<Async load={import('./pages/demo/containers/counter-container')} />);
// const SearchLayoutContainer = () => (<Async load={import('./pages/search/containers/search-layout-container')} />);
const UserListContainer = () => (<Async load={import('./pages/user/containers/user-list-container')} />);
// const UserProfileContainer = () => (<Async load={import('./pages/user/containers/user-profile-container')} />);
const IdeaListContainer = () => (<Async load={import('./pages/idea/containers/idea-list-container')} />);
const WidgetListContainer = () => (<Async load={import('./pages/widget/containers/widget-list-container')} />);
const DataTableContainer = () => (<Async load={import('./pages/dataTable/containers/data-table-container')} />);

// Administration
const Profile = () => (<Async load={import('./pages/administration/user/profile')} />);
//import Profile from './pages/administration/user/profile';

export default (
  <Router history={browserHistory}>
    <Route component={LeftNav}>
      <Route path="/" component={Home} />
      <Route path="/testing" component={TestingComponent} />
      <Route path="/demo" component={DemoComponent} />
      <Route path="/counter" component={CounterContainer} />

      <Route path="users">
        <Route component={SearchLayoutContainer}>
          <IndexRoute component={UserListContainer} />
        </Route>
        <Route path=":userId" component={UserProfileContainer} />
      </Route>

      <Route path="ideas">
        <Route component={SearchLayoutContainer}>
          <IndexRoute component={IdeaListContainer} />
        </Route>
        <Route path=":ideaId" component={UserProfileContainer} />
      </Route>

      <Route path="widgets">
        <Route component={SearchLayoutContainer}>
          <IndexRoute component={WidgetListContainer} />
        </Route>
      </Route>

      <Route path="datatable">
        <Route component={DataTableContainer}>
          <IndexRoute component={DataTableContainer} />
        </Route>
      </Route>

    </Route>
  </Router>
);
