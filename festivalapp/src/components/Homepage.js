import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Card from 'react-bootstrap/Card';
const Homepage = (props) => {
    const event = props.event;

    return (
        <div>
            <div className='hero'><div className='afftext'>Ardrossan<br />Film<br />Festival</div>
                <div className='showcasetext'>SHOWCASING<br />ARDROSSAN'S<br />HIDDEN TALENT</div>
            </div>
            <div className='homepage-container'>
                <div className='homepage-section'>
                    <div className='homepage-section-header'>Who are we?</div>
                    <div className='homepage-inner-area'><div><img className='filmimg' src={require('./images/film.webp')} /></div><div>We are a small filmmaking festival that wants to <br />showcase some of the local talent from the local <br />area, the festival will run over the weekend and<br /> many films will be shown, we are looking for local<br /> talent to showcase, please contact us! <a className='linkbutton' href="/Aboutpage">More Info</a> </div></div>

                </div>
                <div className='homepage-section'>
                    <div className='homepage-section-header'>Attendees</div>
                    <div className='homepage-inner-area textcenter'>We have been mega popular this year so far, some people that are attending are:<br />
                        Florence Adams<br />
                        Milo Baldwin<br />
                        Jackson Beltran<br />
                        Mariya Church<br />
                        Jamie Ramos<br />
                        and many more..
                        <img className='cameraimg' src={require('./images/camera.webp')} />
                    </div>
                    <a className='linkbutton' href="/Aboutpage">More Info</a>

                </div>
            </div>
            <footer />
        </div>

    );
};

export default Homepage;