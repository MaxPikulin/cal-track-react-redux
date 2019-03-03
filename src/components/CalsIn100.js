import React, { Component } from 'react';
import { connect } from 'react-redux';

class CalsIn100 extends Component {
  changeHandle = (e) => {
    this.props.dispatch({
      type: 'CHANGE',
      payload: e.target.value,
    })
  }
  render() {
    return (
      <>
        <label htmlFor="cals-in-100">Cals in 100g:</label><input onChange={(e) => this.changeHandle(e)} name="cals-in-100" type="text" />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(CalsIn100);