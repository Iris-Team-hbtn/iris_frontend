import { useState } from 'react';
import irisLogo from '../assets/iris_logo_white.png';
import axel from '../assets/axel.jpg';
import alexis from '../assets/alexis.jpg';
import santiago from '../assets/santiago.jpg';
import esteban from '../assets/esteban.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import { useSpring, animated } from 'react-spring';

export const Header = () => {
  // State hooks for each image hover
  const [hoveredAxel, setHoveredAxel] = useState(false);
  const [hoveredAlexis, setHoveredAlexis] = useState(false);
  const [hoveredSantiago, setHoveredSantiago] = useState(false);
  const [hoveredEsteban, setHoveredEsteban] = useState(false);

  const headerStyle = {
    backgroundColor: '#1f3685',
    width: '100%',
    height: '50px',
    position: 'fixed',
    top: '0',
    left: '0',
    color: 'white',
    margin: '0',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
  };

  const headerTextStyle = {
    fontSize: '300%',
  };

  const irisLogoStyle = {
    width: '5%',
    minWidth: '70px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
  };

  const imgStyle = (hovered) => ({
    width: '30%',
    minWidth: '113px',
    filter: hovered ? 'grayscale(0%)' : 'grayscale(70%)',
    border: '2px solid rgb(0, 0, 0)',
    margin: '1%',
    transition: 'transform 0.5s, opacity 0.5s',
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
    height: 'auto',
    marginLeft: '1%',
    objectFit: 'cover',
  });

  const divStyle = useSpring({
    backgroundColor: 'black',
    padding: '1%',
    transform: 'translateY(0)',
    reset: true,
    opacity: 1,
    from: { transform: 'translateY(-5%)', opacity: 0.5 },
    config: { tension: 100, friction: 20 },
  })

  return (
    <>
      <div style={headerStyle}>
        <img src={irisLogo} alt="irisLogo" style={irisLogoStyle} />
        <h1 style={headerTextStyle}>Iris</h1>
      </div>
      <div style={{position: 'relative', top: '49px', width: '40vw', minWidth: '380px', padding: '1%', backgroundColor: '#1f3685' }}>
            <h1>About Us</h1>
            <p>We are 3 Holberton Uruguay Students and our Mentor for our graduation project</p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}> 
              <img
                src={axel}
                style={imgStyle(hoveredAxel)}
                onMouseEnter={() => setHoveredAxel(true)}
                onMouseLeave={() => setHoveredAxel(false)}
                onClick={() => setHoveredAxel(!hoveredAxel)}
              />
              <img
                src={alexis}
                style={imgStyle(hoveredAlexis)}
                onMouseEnter={() => setHoveredAlexis(true)}
                onMouseLeave={() => setHoveredAlexis(false)}
                onClick={() => setHoveredAlexis(!hoveredAlexis)}
              />
              <img
                src={santiago}
                style={imgStyle(hoveredSantiago)}
                onMouseEnter={() => setHoveredSantiago(true)}
                onMouseLeave={() => setHoveredSantiago(false)}
                onClick={() => setHoveredSantiago(!hoveredSantiago)}
              />
               <img
                src={esteban}
                style={imgStyle(hoveredEsteban)}
                onMouseEnter={() => setHoveredEsteban(true)}
                onMouseLeave={() => setHoveredEsteban(false)}
                onClick={() => setHoveredAxel(!hoveredEsteban)}
              />
            </div>
            {hoveredAxel && (
              <animated.div style={divStyle}
                   onMouseEnter={() => setHoveredAxel(true)}
                   onMouseLeave={() => setHoveredAxel(false)}>
                <p style={{ fontSize: '24px', margin: '0', fontWeight: '700' }}>Axel Palombo</p>
                <p>Product Manager - Fullstack Developer</p>
                <div>
                  <a href={'https://github.com/axelpalwo'}><img src={github} style={{ width: '4%', minWidth: '40px', margin: '5px' }} /></a>
                  <a href={'https://www.linkedin.com/in/axel-palombo/'}><img src={linkedin} style={{ width: '1%', minWidth: '40px', margin: '5px' }} /></a>
                </div>
              </animated.div>
            )}
            {hoveredAlexis && (
              <animated.div style={{
                ...divStyle,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end', 
                alignItems: 'center'
              }}
                   onMouseEnter={() => setHoveredAlexis(true)}
                   onMouseLeave={() => setHoveredAlexis(false)}>
                <p style={{ fontSize: '24px', margin: '0', fontWeight: '700' }}>Alexis Rodriguez</p>
                <p>Backend Developer - AI specialist</p>
                <div style={{display: 'flex', justifyContent: 'flex-end', width: '10%'}}>
                  <a href={'https://github.com/Magnusmajo'}><img src={github} style={{ width: '0%', minWidth: '40px', margin: '5px' }} /></a>
                  <a href={'https://www.linkedin.com/in/santiago-ramos/'}><img src={linkedin} style={{ width: '6%', minWidth: '40px', margin: '5px' }} /></a>
                </div>
              </animated.div>
            )}
            {hoveredSantiago && (
              <animated.div style={{
                ...divStyle,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end', 
                alignItems: 'flex-end'
              }}
                   onMouseEnter={() => setHoveredSantiago(true)}
                   onMouseLeave={() => setHoveredSantiago(false)}>
                <p style={{ fontSize: '24px', margin: '0', fontWeight: '700' }}>Santiago Ramos</p>
                <p>UX/UI - Frontend Developer</p>
                <div style={{display: 'flex', justifyContent: 'flex-end', width: '10%'}}>
                  <a href={'https://github.com/Swagtiago29'}><img src={github} style={{ width: '5%', minWidth: '40px', margin: '5px' }} /></a>
                  <a href={'https://www.linkedin.com/in/santiago-ramos/'}><img src={linkedin} style={{ width: '5%', minWidth: '40px', margin: '5px' }} /></a>
                </div>
                </animated.div>
            )}
            {hoveredEsteban && (
              <animated.div style={{
                ...divStyle,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end', 
                alignItems: 'flex-end'
              }}
                   onMouseEnter={() => setHoveredEsteban(true)}
                   onMouseLeave={() => setHoveredEsteban(false)}>
                <p style={{ fontSize: '24px', margin: '0', fontWeight: '700' }}>Esteban Petrovich</p>
                <p>Team Mentor - Titulo preferido</p>
                <div style={{display: 'flex', justifyContent: 'flex-end', width: '10%'}}>
                  <a href={'https://github.com/estebanpetrovich'}><img src={github} style={{ width: '5%', minWidth: '40px', margin: '5px' }} /></a>
                  <a href={'https://www.linkedin.com/in/estebanpetrovich/'}><img src={linkedin} style={{ width: '5%', minWidth: '40px', margin: '5px' }} /></a>
                </div>
                </animated.div>
            )}
      </div>
    </>
  );
};
