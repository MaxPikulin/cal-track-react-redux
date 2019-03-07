import React from 'react';
import { connect } from 'react-redux';
import { changeNote } from '../actions'

const NoteCals = ({ noteCals, changeNote }) => {
  return (
    <div>
      <label htmlFor="note-cals">Note:</label><input onChange={(e) => changeNote(+e.target.value)} name="note-cals" type="text" value={noteCals || ''} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  noteCals: state.noteCals,
});
const mapDispatchToProps = (dispatch) => ({
  changeNote: (value) => dispatch(changeNote(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteCals);