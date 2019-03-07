import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMyCals, addTodayEntry } from '../actions';

class MyCals extends Component {

  render() {
    const keyPress = (e) => {
      if (e.keyCode === 13) {
        this.props.addTodayEntry(+e.target.value);
      }
    }
    return (
      <div>
        <label htmlFor="my-cals">My cals:</label>
        <input
          onChange={(e) => this.props.changeMyCals(+e.target.value)}
          onKeyDown={keyPress}
          name="my-cals"
          type="text"
          value={this.props.myCals || ''}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  myCals: state.myCals,
});

const mapDispatchToProps = (dispatch) => ({
  changeMyCals: value => dispatch(changeMyCals(value)),
  addTodayEntry: (value) => dispatch(addTodayEntry(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyCals);