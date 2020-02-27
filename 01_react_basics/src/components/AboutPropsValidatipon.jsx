import React, { Component } from 'react';
import propTypes from 'prop-types';
export default class AboutPropsValidatipon extends Component {
  render() {
    return (
      <div>
        <h3>Array:{this.props.propArray}</h3>
        <h3>Boolean:{this.props.propBool ? 'True' : 'False'}</h3>
        <h3>Function:{this.props.propFunc}</h3>
        <h3>Number:{this.props.propNumber}</h3>
        <h3>String:{this.props.propString}</h3>
        <h3>Object:{this.props.propObject}</h3>
      </div>
    );
  }
}

AboutPropsValidatipon.propTypes = {
  propArray: propTypes.array.isRequired,
  propBool: propTypes.bool.isRequired,
  propFunc: propTypes.func,
  propNumber: propTypes.number,
  propString: propTypes.string,
  propObject: propTypes.object
};

AboutPropsValidatipon.defaultProps = {
  propArray: [11, 22, 33, 44],
  propBool: true,
  propFunc: function(args) {
    return args;
  },
  propNumber: 11,
  propString: 'Default String'
  //   propObject: { userName: 'Samuel', LastName: 'Yonael' }
};
