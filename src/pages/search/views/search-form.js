import React from 'react';

export default class SearchForm extends React.Component {

  getQuery() {
    return this.refs.search.value;
  }

  render() {
    return (
      <form onSubmit={this.props.search} className="search">
        <input type="text" ref="search" placeholder="Search" />
        <button>Search</button>
      </form>
    );
  }
}
