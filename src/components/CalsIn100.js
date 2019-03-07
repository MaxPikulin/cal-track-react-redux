import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changeC100} from '../actions';

class CalsIn100 extends Component {
  render() {
    return (
      <div>
        <label htmlFor="cals-in-100">Cals in 100g:</label><input onChange={(e) => this.props.changeC100(+e.target.value)} name="cals-in-100" type="text" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeC100: value => dispatch(changeC100(value)),
  }
}

export default connect(null, mapDispatchToProps)(CalsIn100);