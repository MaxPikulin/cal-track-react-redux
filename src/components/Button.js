import React, { Component } from 'react';
import { connect } from 'react-redux';

const handleClick = (e, props) => {
  if (e.ctrlKey) props.dispatch({ type: 'DEC' })
  else props.dispatch({ type: 'INC' });
}




class Button extends Component {

  render() {
    return (
      <div>
        <button onClick={(e) => handleClick(e, this.props)}>Click {this.props.counter}</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

// const mapDispatcherToProps = {

// }

export default connect(mapStateToProps)(Button);