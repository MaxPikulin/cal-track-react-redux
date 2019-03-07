import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeC100 } from '../actions';

class CalsIn100 extends Component {
  render() {
    return (
      <div>
        <label htmlFor="cals-in-100">Cals in 100g:</label>
        <input
          onChange={(e) => this.props.changeC100(+e.target.value)}
          name="cals-in-100"
          type="text"
          value={this.props.calsIn100 || ''}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  calsIn100: state.calsIn100,
});

const mapDispatchToProps = (dispatch) => ({
  changeC100: (value) => dispatch(changeC100(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalsIn100);