import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeGrams } from '../actions';

class Grams extends Component {
  render() {
    return (
      <div>
        <label htmlFor="grams">Grams:</label><input onChange={(e) => this.props.changeGrams(+e.target.value)} name="grams" type="text" value={this.props.grams || ''}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  grams: state.grams,
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeGrams: value => dispatch(changeGrams(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grams);