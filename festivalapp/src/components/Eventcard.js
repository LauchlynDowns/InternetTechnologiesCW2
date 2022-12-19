import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Card from 'react-bootstrap/Card';
const Eventcard = (props) => {
  const event = props.event;

  return (
    <body className='gray'>
      <Card className="card-container" style={{ width: '70vw' }}>
        <div className='cardorganiser'>
          <div className='textarea'>
            <Card.Title className='title'>Title:   {event.title}</Card.Title>
            <Card.Subtitle className="text-muted">Producer:   {event.producer}</Card.Subtitle>
            <Card.Body className="textdescription"> Description:   {event.description}</Card.Body>
            
          </div>
          <div className='imagecontainer'><img className='eventimage' src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img></div>
        </div>
      </Card>
    </body>

  );
};

export default Eventcard;