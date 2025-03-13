import { useRef } from 'react';
import irisLogo from '../assets/iris_logo_white.png';
import axel from '../assets/axel.jpg';
import alexis from '../assets/alexis.jpg';
import santiago from '../assets/santiago.jpg';
import esteban from '../assets/esteban.jpg';
import homepic from '../assets/output.jpg';
import { Button } from './NavigationButton';
import { Card } from './HoverCard';
import vid1 from '../assets/video5.mp4'
import vid2 from '../assets/video4.mp4'
import vid3 from '../assets/video6.mp4'

export const Header = () => {
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
  return (
    <div width='100vw'>
      <div style={headerStyle}>
        <img src={irisLogo} alt='irisLogo' style={irisLogoStyle} />
        <h1 style={{ display: 'flex', alignItems: 'center' }} className='header-text'>Iris</h1>
        <div style={{ marginRight: '10px', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
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
          width: '95%',
          padding: '0px',
          marginBottom: '10px'
        }}>
          <video style={{ marginTop: '20px', marginBottom: '20px', width: '50%', minWidth: '350px' }} width="45%" controls poster="/assets/video_poster.jpg">
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p style={{ width: '40%', minWidth: '350px' }}>
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
         width: '95%',
         padding: '0px',
         marginTop: '10px',
         marginBottom: '10px'
        }}>
          <p style={{ width: '40%', minWidth: '350px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <video style={{ marginTop: '20px', marginBottom: '20px', minWidth: '350px' }} width="55%" controls poster="/assets/video_poster.jpg">
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
          width: '95%',
          padding: '0px',
          marginTop: '10px',
          marginBottom: '10px'
        }}>
          <video style={{ marginTop: '20px', marginBottom: '20px', minWidth: '350px' }} width="55%" controls poster="/assets/video_poster.jpg">
            <source src={vid3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p style={{width: '40%', minWidth: '350px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
      </div>
      <div ref={aboutUsRef} style={{ position: 'relative', minWidth: '305px', backgroundColor: '#ffffff' }}>
        <h1 className=''>About Us</h1>
        <p>We are 3 Holberton Uruguay Students and our Mentor!</p>
        <div style={{ height: '100%', width: '100%', padding: '0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <Card img={axel} Github={"https://github.com/axelpalwo"} Linkedin={"https://www.linkedin.com/in/axel-palombo/"} _name={"Axel Palombo"} title={"Product Manager - Backend Developer"}/>
          <Card img={alexis} Github={"https://github.com/Magnusmajo"} Linkedin={"https://www.linkedin.com/in/magnusmajo/"} _name={"Alexis Rodriguez"} title={"Backend Developer - AI Specialist"}/>
          <Card img={santiago} Github={"https://github.com/Swagtiago29"} Linkedin={"https://www.linkedin.com/in/santiago-ramos-6538092a2/"} _name={"Santiago Ramos"} title={"UX/UI - Frontend Developer"} />
          <Card img={esteban} Github={"https://github.com/estebanpetrovich"} Linkedin={"https://www.linkedin.com/in/estebanpetrovich/"} _name={"Esteban Petrovich"} title={"Mentor - Technical Manager at Globant"}/>
        </div>
      </div>
      <div style={{
      width: '100%',
      height: '6%', /* Adjust height based on how big you want the footer */
      backgroundColor: 'rgb(68, 90, 161)', /* A dark background color for the footer */
      color: '#fff', /* Text color */
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '30px',
    }}>
      <p style={{ fontSize: '16px', textAlign: 'center' }}>
        This is the end of the page. Thank you for visiting!
      </p>
    </div>
    </div>
  );
};
