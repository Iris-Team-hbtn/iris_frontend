import React, { useState } from 'react';
import irisLogo from '../assets/iris_logo_white.png';
import axel from '../assets/axel.jpg';
import alexis from '../assets/alexis.jpg';
import santiago from '../assets/santiago.jpg';

export const Header = () => {
  // State hooks for each image hover
  const [hoveredAxel, setHoveredAxel] = useState(false);
  const [hoveredAlexis, setHoveredAlexis] = useState(false);
  const [hoveredSantiago, setHoveredSantiago] = useState(false);

  const headerStyle = {
    backgroundColor: '#1f3685',
    opacity: '0.9',
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
    width: '20%',
    minWidth: 'px',
    filter: hovered ? 'grayscale(0%)' :'grayscale(80%)',
    border: '2px solid rgb(0, 0, 0)',
    margin: '1%',
    transition: 'transform 0.5s, opacity 0.5s', // Smooth transition for transform and opacity
    transform: hovered ? 'scale(1.1)' : 'scale(1)', // Grow the image on hover
  });

  return (
    <>
      <div style={{ position: 'relative', top: '50px', width: '50vw', minWidth: '350px', padding: '1%', backgroundColor: '#1f3685' }}>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <h2>About Us</h2>
            <p>We are 3 Holberton Uruguay Students and our graduation project is Iris!</p>
          </li>
          <li>
            <img
              src={axel}
              style={imgStyle(hoveredAxel)} // Pass hovered state for this image
              onMouseEnter={() => setHoveredAxel(true)} // Hover starts
              onMouseLeave={() => setHoveredAxel(false)} // Hover ends
            />
          </li>
          <li>
            <img
              src={alexis}
              style={imgStyle(hoveredAlexis)} // Pass hovered state for this image
              onMouseEnter={() => setHoveredAlexis(true)} // Hover starts
              onMouseLeave={() => setHoveredAlexis(false)} //Hover end
            />
            {hoveredAlexis && <div>Content to render if condition is true</div>}
          </li>
          <li>
            <img
              src={santiago}
              style={imgStyle(hoveredSantiago)} // Pass hovered state for this image
              onMouseEnter={() => setHoveredSantiago(true)} // Hover starts
              onMouseLeave={() => setHoveredSantiago(false)} // Hover ends
            />
          </li>
        </ul>
      </div>
      <div style={headerStyle}>
        <img src={irisLogo} alt="irisLogo" style={irisLogoStyle} />
        <h1 style={headerTextStyle}>Iris</h1>
      </div>
    </>
  );
};
