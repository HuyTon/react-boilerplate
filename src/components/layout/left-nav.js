import React from 'react';
// import { Link } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export default function(props) {
  return (
    // <div className="app">
    <div>
      <header className="primary-header"></header>
      <aside className="primary-aside">
        <ul>
          <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
          <li><NavLink to="/ideas" activeClassName="active">Ideas</NavLink></li>
          <li><NavLink to="/widgets" activeClassName="active">Widgets</NavLink></li>
          <li><NavLink to="/datatable" activeClassName="active">Data Table</NavLink></li>
          <li><NavLink to="/testing" activeClassName="active">For Testing</NavLink></li>
          <li><NavLink to="/demo" activeClassName="active">For Demo</NavLink></li>
          <li><NavLink to="/counter" activeClassName="active">Counter</NavLink></li>
        </ul>
      </aside>
      <main>
        {props.children}
      </main>
    </div>
    );
}
