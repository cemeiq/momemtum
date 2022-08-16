import React from 'react'
import Time from './components/Time';
import Weather from './components/Weather';
import DateToday from './components/DateToday';
import Quote from './components/Quote';

function App() {
  return (
    <div>
     <Weather/>
     <Time/>
     <DateToday/>
     <Quote/>
    </div>
  );
}

export default App;
