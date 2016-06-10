import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import Details from './Details';

class DetailsContainer extends Component {

  render() {
    const { details, detailsReady } = this.props;

    return (
      <Details
        detailsReady = { detailsReady }
        details = { details }
      />
    );
  }
}

DetailsContainer.propTypes = {
  details: React.PropTypes.array,
};

export default createContainer(() => {
  const handle = Meteor.subscribe('products-list');

  return {
    detailsReady: handle.ready(),
    details: Meteor.collection('products').find()
  };
},DetailsContainer);
