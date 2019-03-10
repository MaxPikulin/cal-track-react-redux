import React, { useEffect } from 'react';
import Button from './components/Button';
import CalsIn100 from './components/CalsIn100';
import Grams from './components/Grams';
import MyCals from './components/MyCals';
import NoteCals from './components/NoteCals';
import TodayCals from './components/TodayCals';
import { connect } from 'react-redux';
import { handleDayChange, checkDate } from './logic';

const App = ({ todayDate }) => {
  
  useEffect(() => {
    window.addEventListener('focus', () => handleDayChange(todayDate));
  }, []);
  // useEffect(() => {
  //   checkDate(todayDate);
  // });
  
  return (
    <div className="App">
      <NoteCals />
      <CalsIn100 />
      <Grams />
      <MyCals />
      <TodayCals />
      <Button />
    </div>
  );
}

const mapStateToProps = (state) => ({
  todayDate: state.todayDate,
});

export default connect(mapStateToProps)(App);
