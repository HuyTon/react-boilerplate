import React from 'react';
import * as userApi from '@services/user-api';
import * as widgetApi from '@services/widget-api';
import SearchForm from '../views/search-form';

export default class SearchFormContainer extends React.Component {

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search(event) {
    event.preventDefault();

    // By assigning a "child" ref to <SearchForm />, we
    // can use that reference to gain access to the
    // .getQuery() method. See the code for
    // <SearchForm /> to see how it returns a value.
    let query = this.refs.child.getQuery();

    if (this.props.searchType === 'users') {
      userApi.searchUsers(query);
    } else if (this.props.searchType === 'widgets') {
      widgetApi.searchWidgets(query);
    }
  }

  render() {
    return (
      <SearchForm search={this.search} ref="child" />
    );
  }
}