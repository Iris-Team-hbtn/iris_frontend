import { useState, useRef } from 'react';
import irisLogo from '../assets/iris_logo_white.png';
import axel from '../assets/axel.jpg';
import alexis from '../assets/alexis.jpg';
import santiago from '../assets/santiago.jpg';
import esteban from '../assets/esteban.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import homepic from '../assets/output.jpg';
import { useSpring, animated } from 'react-spring';
import { Button } from './NavigationButton';
import { Card } from './HoverCard';
import { FeedbackForm } from './EmailInput';
import vid1 from '../assets/vid1.mp4'
import vid2 from '../assets/vid2.mp4'
import vid3 from '../assets/vid3.mp4'

export const Header = () => {
  // State hooks for each image hover
  const [hoveredAxel, setHoveredAxel] = useState(false);
  const [hoveredAlexis, setHoveredAlexis] = useState(false);
  const [hoveredSantiago, setHoveredSantiago] = useState(false);
  const [hoveredEsteban, setHoveredEsteban] = useState(false);
  const homeRef = useRef(null)
  const featuresRef = useRef(null);
  const aboutUsRef = useRef(null);

  // Function to scroll to the target div
  const scrollToDiv = (targetRef) => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const headerStyle = {
    backgroundColor: 'rgba(31, 55, 133, 0.75)',
    width: '100%',
    height: '5%',
    position: 'fixed',
    top: '0',
    left: '0',
    color: 'white',
    margin: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '10',
    padding: '5px',
  };

  const irisLogoStyle = {
    width: '5%',
    minWidth: '70px',
    display: 'flex',
    alignItems: 'center',
  };

  const imgStyle = (hovered) => ({
    width: '15vw',
    minWidth: '270px',
    filter: hovered ? 'grayscale(0%)' : 'grayscale(70%)',
    border: '2px solid rgb(0, 0, 0)',
    transition: 'transform 0.5s, opacity 0.5s',
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
    height: 'auto',
    objectFit: 'cover',
  });

  const divStyle = useSpring({
    backgroundColor: 'black',
    transform: 'translateY(0)',
    reset: true,
    opacity: 1,
    from: { transform: 'translateY(-5%)', opacity: 0.5 },
    config: { tension: 100, friction: 20 },
  })

  return (
    <div width='100vw'>
      <div style={headerStyle}>
        <img src={irisLogo} alt='irisLogo' style={irisLogoStyle} />
        <h1 style={{ display: 'flex', alignItems: 'center' }} className='header-text'>Iris</h1>
        <div style={{ paddingRight: '10px', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <Button content={'Home'} scrollTo={() => scrollToDiv(homeRef)} />
          <Button content={'Features'} scrollTo={() => scrollToDiv(featuresRef)} />
          <Button content={'About Us'} scrollTo={() => scrollToDiv(aboutUsRef)} />
        </div>
      </div>
      <div ref={homeRef} style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
        <img
          src={homepic}
          className="home-image"
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            objectPosition: 'center',
            position: 'relative'
          }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center'
        }}>
          <h1 className='home-text'>Meet IRIS!</h1>
          <div style={{ height: '15vw', minHeight: '150px' }}></div>
          <h1 className='homea-text'>Your&nbsp;personal healthcare AI assistant</h1>
        </div>
      </div>
      <div ref={featuresRef} style={{
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'static',
        paddingTop: '20px',
        width: '100%',
        minWidth: '380px'
      }}>
        <h1 style={{ paddingBottom: '20px', color: 'rgb(49, 49, 49)' }} className='header-text'>
          Key Features
        </h1>
        {/* First block */}
        <div style={{
          backgroundColor: 'rgb(40, 74, 185)',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '15px',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '90%',
          padding: '10px',
          marginBottom: '10px'
        }}>
          <video style={{ minWidth: '350px' }} width="45%" controls poster="/assets/video_poster.jpg">
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p style={{ padding: '5%', width: '40%', minWidth: '350px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>

        {/* Second block */}
        <div style={{
         backgroundColor: 'rgb(31, 55, 133)',
         display: 'flex',
         justifyContent: 'center',
         borderRadius: '15px',
         alignItems: 'center',
         flexWrap: 'wrap',
         width: '90%',
         padding: '10px',
         marginTop: '10px',
         marginBottom: '10px'
        }}>
          <p style={{ padding: '2%', width: '40%', minWidth: '350px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <video style={{ minWidth: '350px' }} width="55%" controls poster="/assets/video_poster.jpg">
            <source src={vid2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Third block */}
        <div style={{
          backgroundColor: 'rgb(24, 41, 97)',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '15px',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '90%',
          padding: '10px',
          marginTop: '10px',
          marginBottom: '10px'
        }}>
          <video style={{ minWidth: '350px' }} width="55%" controls poster="/assets/video_poster.jpg">
            <source src={vid3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p style={{ padding: '2%', width: '40%', minWidth: '350px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
      </div>
      <div ref={aboutUsRef} style={{ position: 'relative', top: '49px', minWidth: '305px', backgroundColor: '#ffffff' }}>
        <h1>About Us</h1>
        <p>We are 3 Holberton Uruguay Students and our Mentor!</p>
        <div style={{ width: '100%', padding: '0', height: '1050px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <Card img={axel} />
          <Card img={alexis} />
          <Card img={santiago} />
          <Card img={esteban} />
        </div>
        <FeedbackForm />
      </div>
    </div>
  );
};
