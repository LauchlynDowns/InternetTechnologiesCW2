import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Eventcard from './Eventcard';

function Showallevents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/events')
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowEventList');
      });
  }, []);

  const eventlist =
    events.length === 0
      ? 'there is no events!'
      : events.map((event, k) => <Eventcard event={event} key={k} />);

  return (
  <div className='addevent-container'>
        
        <div className='list'>{eventlist}</div>
        </div>
  );
}

export default Showallevents;