import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Card from 'react-bootstrap/Card';
const Mappage = (props) => {
    const event = props.event;

    return (
        <div className='addevent-container'><br /><br /><h1 className='display-4 text-left addevent-header-text'>Our Location</h1><br /><div className='mapimage'><div className="google-map-code">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.8079592378867!2d-4.80285226988516!3d55.64015492413276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4889c5a0e617daed%3A0xeeb4f97712a5f516!2sArdrossan%20South%20Beach!5e0!3m2!1sen!2suk!4v1671567549227!5m2!1sen!2suk" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div></div>
            <div className='locationpage-info-container'>
                <div className='mapsinfopanel lightgray'>
                    The festival will be hosted<br /> outside in a large pop up cinema<br /> screen, a limited amont of chairs<br /> will be available and it will be £5<br /> entry per person.
                </div>
                <div className='mapsinfopanel white'>
                    Ardrossan Film Festival<br />
                    South cresent road<br />
                    Ardrossan<br />
                    Scotland

                </div>
            </div>
        </div>

    );
};

export default Mappage;