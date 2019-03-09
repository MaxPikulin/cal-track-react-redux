import React, { useEffect } from 'react';
import Button from './components/Button';
import CalsIn100 from './components/CalsIn100';
import Grams from './components/Grams';
import MyCals from './components/MyCals';
import NoteCals from './components/NoteCals';
import TodayCals from './components/TodayCals';

const App = () => {
  useEffect(() => {
    window.addEventListener('focus', () => console.log(new Date()));
  }, []);
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

export default App;
