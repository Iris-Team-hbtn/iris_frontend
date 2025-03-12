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
          <h1 style={{display: 'flex', alignItems: 'center'}} className='header-text'>Iris</h1>
        <div style={{ paddingRight: '10px', width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
          <Button content={'Home'} scrollTo={() => scrollToDiv(homeRef)} />
          <Button content={'Features'} scrollTo={() => scrollToDiv(featuresRef)} />
          <Button content={'About Us'} scrollTo={() => scrollToDiv(aboutUsRef)} />
        </div>
      </div>
      <div ref={homeRef} style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
        <img 
          src={homepic} 
          className="home-image"
          style={{width: '100%', 
                  height: '100vh',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  position: 'relative'}}/>
          <div 
          style={{
      position: 'absolute',
      top: '50%',  // Center vertically
      left: '50%', // Center horizontally
      transform: 'translate(-50%, -50%)', // Adjust to truly center
      color: 'white',  // Optional: ensure the text is visible on top of the image
      textAlign: 'center', // Optional: center the text horizontally
    }}
  >
    <h1 className='home-text'>Meet IRIS!</h1>
    <div style={{height: '15vw', minHeight: '150px'}}></div>
    <h1 className='homea-text'>Your&nbsp;personal healthcare AI assistant</h1>
  </div>
      </div>
      <div ref={featuresRef} style={{desplay:'flex', position: 'static', paddingTop: '40px', minWidth: '380px', backgroundColor: 'green' }}>
        <h1>Key Features</h1>
        <div style={{backgroundColor: 'pink', display: 'flex', flexWrap: 'wrap'}}>
          <video style={{minWidth: '350px'}} width="45%" controls poster="/assets/video_poster.jpg">
            <source src={vid1} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <p style={{ width: '40%', minWidth: '350px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div style={{ backgroundColor: 'blue', display: 'flex', flexWrap: 'wrap'}}>
          <p style={{width: '40%', minWidth: '350px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <video style={{minWidth: '350px'}}width="55%" controls poster="/assets/video_poster.jpg">
            <source src={vid2} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div style={{  backgroundColor: 'cyan', display: 'flex', flexWrap: 'wrap'}}>
          <video style={{minWidth: '350px'}} width="55%" controls poster="/assets/video_poster.jpg">
            <source src={vid3} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <p style={{width: '40%', minWidth: '350px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div ref={aboutUsRef} style={{ position: 'relative', top: '49px', minWidth: '305px', backgroundColor: '#1f3685' }}>
        <h1>About Us</h1>
        <p>We are 3 Holberton Uruguay Students and our Mentor!</p>
        <div style={{ width: '100%', height: '1050px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <div>
            <img
              src={axel}
              style={imgStyle(hoveredAxel)}
              onMouseEnter={() => setHoveredAxel(true)}
              onMouseLeave={() => setHoveredAxel(false)}
              onClick={() => setHoveredAxel(!hoveredAxel)}/>
            {hoveredAxel && (
          <animated.div style={divStyle}
            onMouseEnter={() => setHoveredAxel(true)}
            onMouseLeave={() => setHoveredAxel(false)}>
            <p style={{ fontSize: '24px', margin: '0', fontWeight: '700' }}>Axel Palombo</p>
            <p>Product Manager - Fullstack Developer</p>
            <div>
              <a href={'https://github.com/axelpalwo'}><img src={github} style={{ width: '4%', minWidth: '40px' }} /></a>
              <a href={'https://www.linkedin.com/in/axel-palombo/'}><img src={linkedin} style={{ width: '1%', minWidth: '40px', }} /></a>
            </div>
          </animated.div>
           )}
        </div>
          <div>
            <img
              src={alexis}
              style={imgStyle(hoveredAlexis)}
              onMouseEnter={() => setHoveredAlexis(true)}
              onMouseLeave={() => setHoveredAlexis(false)}
              onClick={() => setHoveredAlexis(!hoveredAlexis)}/>
              {hoveredAlexis && (
                <animated.div style={{
                  ...divStyle,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  width: '17%'
                }}
                  onMouseEnter={() => setHoveredAlexis(true)}
                  onMouseLeave={() => setHoveredAlexis(false)}>
                  <p style={{ fontSize: '24px', margin: '0', fontWeight: '700' }}>Alexis Rodriguez</p>
                  <p>Backend Developer - AI specialist</p>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', width: '10%' }}>
                    <a href={'https://github.com/Magnusmajo'}><img src={github} style={{ width: '0%', minWidth: '40px' }} /></a>
                    <a href={'https://www.linkedin.com/in/santiago-ramos/'}><img src={linkedin} style={{ width: '6%', minWidth: '40px', }} /></a>
                  </div>
                </animated.div>
              )}
          </div>
          <div>
            <img
              src={santiago}
              style={imgStyle(hoveredSantiago)}
              onMouseEnter={() => setHoveredSantiago(true)}
              onMouseLeave={() => setHoveredSantiago(false)}
              onClick={() => setHoveredSantiago(!hoveredSantiago)}/>
            {hoveredSantiago && (
              <Card/>
            )}
          </div>
          <div>
            <img
              src={esteban}
              style={imgStyle(hoveredEsteban)}
              onMouseEnter={() => setHoveredEsteban(true)}
              onMouseLeave={() => setHoveredEsteban(false)}
              onClick={() => setHoveredAxel(!hoveredEsteban)}/>
            {hoveredEsteban && (
              <Card/>
            )}
          </div>
        </div>
        <FeedbackForm/>
      </div>
    </div>
  );
};
