import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addevent = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    title: '',
    producer: '',
    description: '',
    event_date: '',
  });

  const onChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/events', event)
      .then((res) => {
        setEvent({
          title: '',
          producer: '',
          description: '',
          event_date: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in AddEvent!');
      });
  };

  return (
    <div className='addevent-container'>

      <div className='container'>
        <h1 className='display-4 text-left addevent-header-text'>Add Event</h1>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />

          </div>

          <div className='col-md-8 m-auto eventform'>
            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <p className='form-text'>Event Title</p>
                <input
                  type='text'
                  placeholder='Title of the Event'
                  name='title'
                  className='form-control'
                  value={event.title}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
              <p className='form-text'>Producer</p>
                <input
                  type='text'
                  placeholder='producer'
                  name='producer'
                  className='form-control'
                  value={event.producer}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
              <p className='form-text'>Event Description</p>
                <input
                  type='text'
                  placeholder='description'
                  name='description'
                  className='form-control'
                  value={event.description}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
              <p className='form-text'>Event Date</p>
                <input
                  type='text'
                  placeholder='event date'
                  name='event_date'
                  className='form-control'
                  value={event.event_date}
                  onChange={onChange}
                />
              </div>



              <input
                type='submit'
                
                className='btn eventsubmitbutton'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addevent;