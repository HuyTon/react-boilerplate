import React from 'react';
import { connect } from 'react-redux';
import IdeaList from '../views/idea-list';
import * as ideaApi from '../../../services/idea-api';
import store from '../../../store/store';
import { loadSearchLayout } from '../../../store/actions/search-layout-actions';

class IdeaListContainer extends React.Component {

  componentDidMount() {
    ideaApi.getIdeas();
    store.dispatch(loadSearchLayout('ideas', 'Idea Results'));
  }

  render() {
    // return (
    //   <IdeaList 
    //     ideas={this.props.ideas} 
    //     // deleteIdea={ideaApi.deleteIdea} 
    //     />
    // );
    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="section-content">
              <div className="section-title">Enterprise Solutions</div>
              <div className="section-image-container">
                <div className="section-image-row">
                  <IdeaList
                    ideas={this.props.ideas}
                  // deleteIdea={ideaApi.deleteIdea} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};

const mapStateToProps = function (store) {
  return {
    ideas: store.ideaState.ideas
  };
};

export default connect(mapStateToProps)(IdeaListContainer);
