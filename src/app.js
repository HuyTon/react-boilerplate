import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthProvider from './auth/auth-provider';
import ProtectedRoute from './auth/protected-route';
import Async from 'react-code-splitting';
import './assets/css/app.css';

// Layouts
import NavBar from '@components/layout/navBar/nav-bar';
import Footer from '@components/layout/footer/footer';

// Pages
import SearchLayoutContainer from '@pages/search/containers/search-layout-container';
import UserProfileContainer from '@pages/user/containers/user-profile-container';

// Pages
/* Dynamic Imports for Lazy-loaded Modules */
const Home = () => (<Async load={import('@pages/home')} />);
const TestingComponent = () => (<Async load={import('@pages/testingComponent')} />);
const CounterContainer = () => (<Async load={import('@pages/demo/containers/counter-container')} />);
const UserListContainer = () => (<Async load={import('@pages/user/containers/user-list-container')} />);
const WidgetListContainer = () => (<Async load={import('@pages/widget/containers/widget-list-container')} />);
const DataTableContainer = () => (<Async load={import('@pages/dataTable/containers/data-table-container')} />);

// Administration
const Profile = () => (<Async load={import('@pages/administration/user/profile')} />);

export default (
  <BrowserRouter>
    <AuthProvider>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar/>
        <div>          
          <Route exact path="/home" component={Home} />
          <Route exact path="/testing" component={TestingComponent} />
          <Route exact path="/counter" component={CounterContainer} />

          <Route exact path="/users">
            <Route component={SearchLayoutContainer} />
            <ProtectedRoute component={UserListContainer} />
          </Route>

          <ProtectedRoute exact path="/users:userId" component={UserProfileContainer} />
          <ProtectedRoute exact path="/profile" component={Profile} />

          <Route path="/widgets">
            <Route component={SearchLayoutContainer}>
              <Route exact path="/widgets" component={WidgetListContainer} />
            </Route>
          </Route>

          <Route path="/datatable">
            <Route component={DataTableContainer}>
              <Route exact path="/datatable" component={DataTableContainer} />
            </Route>
          </Route>
        </div>      
        <Footer/>
      </div>
    </AuthProvider>
  </BrowserRouter>
);
