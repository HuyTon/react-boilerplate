import React from 'react';
import { connect } from 'react-redux';
import IdeaDetails from '../views/idea-details';
import * as ideaAPI from '../../../services/idea-api';

class IdeaDetailsContainer extends React.Component {

  componentDidMount () {
    let ideaId = this.props.params.ideaId;
    ideaAPI.getDetails(ideaId);
  }

  render () {
    return (
      <IdeaDetails {...this.props.profile} />
    );    
  }

}

const mapStateToProps = function(store) {
  return {
    profile: store.userState.userProfile
  };
};

export default connect(mapStateToProps)(IdeaDetailsContainer);
