import React from 'react';
import { connect } from 'react-redux';
import WidgetList from '../views/widget-list';
import * as widgetApi from '../../../services/widget-api';
import store from '../../../store/store';
import { loadSearchLayout } from '../../../store/actions/search-layout-actions';

class WidgetListContainer extends React.Component {

  componentDidMount() {
    widgetApi.getWidgets();
    store.dispatch(loadSearchLayout('widgets', 'Widget Results'));
  }

  render() {
    return (
      <WidgetList widgets={this.props.widgets} deleteWidget={widgetApi.deleteWidget} />
    );
  }

}

const mapStateToProps = function(store) {
  return {
    widgets: store.widgetState.widgets
  };
};

export default connect(mapStateToProps)(WidgetListContainer);
