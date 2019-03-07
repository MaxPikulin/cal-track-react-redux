import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMyCals } from '../actions';

class MyCals extends Component {
  render() {
    return (
      <div>
        <label htmlFor="my-cals">My cals:</label><input onChange={(e) => this.props.changeMyCals(+e.target.value)} name="my-cals" type="text" value={this.props.myCals || ''} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  myCals: state.myCals,
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeMyCals: value => dispatch(changeMyCals(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCals);