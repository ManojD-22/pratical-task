import React, { useState } from 'react';

const WeekNavigator = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState('UTC');
  const [currentTime, setCurrentTime] = useState(new Date());


  const handlePrevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const formatWeekRange = () => {
    // Add logic here to format and display the week range based on currentDate
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    
    return `${startOfWeek.toDateString()} - ${endOfWeek.toDateString()}`;
  };

 
  const handleTimezoneChange = (event) => {
    const newTimezone = event.target.value;
    setSelectedTimezone(newTimezone);
    // Update the current time based on the new timezone
    setCurrentTime(new Date(currentTime.toLocaleString('en-US', { timeZone: newTimezone })));
  };

  var showDate = new Date();
  var displayDate = showDate.getDate()+`/`+showDate.getMonth()+`/`+showDate.getFullYear();


  return (
    <div className='container'>
          <div  className='main'>
            <button className="btn1" onClick={handlePrevWeek}>Previous Week</button>
            <input className='base' type='text' value={displayDate} readOnly="true"/>
            <button className="btn2" onClick={handleNextWeek}>Next Week</button>
          </div>
        <div>
          <div>
            <label>Select Timezone: </label>
            <select value={selectedTimezone} onChange={handleTimezoneChange}>
              <option value="UTC">UTC</option>
              <option value="America/New_York">Eastern Time (US)</option>
            </select>
          </div>

          <div>
            <p>Current Time in {selectedTimezone}:</p>
            <p>{currentTime.toLocaleString('en-US', { timeZone: selectedTimezone })}</p>
          </div>
        </div>
        <h1>{formatWeekRange()}</h1>
    </div>
  );
};

export default WeekNavigator;
