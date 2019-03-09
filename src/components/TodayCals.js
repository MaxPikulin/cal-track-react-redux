import React from 'react';
import { connect } from 'react-redux';

const TodayCals = ({ todayList }) => {
  return (
    <div>
      <ul>
        {todayList.map((item, i) => (
          <li key={i}>{item}</li>
        )).reverse()}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todayList: state.todayList,
})

export default connect(mapStateToProps)(TodayCals);