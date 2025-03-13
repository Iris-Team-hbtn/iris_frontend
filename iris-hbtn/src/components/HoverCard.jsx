import styled from 'styled-components';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

export const Card = ({ img, _name, title, Github, Linkedin }) => {
  return (
    <StyledWrapper>
      <section id="card1" className="card">
        <div className="card__image-container">
          <img className="card__image" src={img} alt="img" />
        </div>
        <div className="card__content">
          <p className="card__title">{_name}</p>
          <p className="card__description">
            {title}
            <div className="social-icons">
              <a href={Github}><img src={github} alt="GitHub" className="social-icon" /></a>
              <a href={Linkedin}><img src={linkedin} alt="LinkedIn" className="social-icon" /></a>
            </div>
          </p>
        </div>
      </section>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  section.card {
    position: relative;
    width: 350px;
    height: 350px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    margin-top: 30px;
  }

  /* Style the image to fill the card */
  .card__image-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .card__image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the area */
    transition: opacity 0.3s ease;
  }

  .card__content {
    color: #000000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 2;
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    padding-left: 5px;
    font-size: 24px;
    color: #000000;
    font-weight: 700;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 18px;
    color: #000000;
    line-height: 1.4;
  }

  /* Social Icons */
  .social-icons {
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .social-icon {
    width: 60px;
    margin-left: 10px;
  }

  /* Show the social icons on hover */
  .card:hover .social-icons {
    opacity: 1;
  }

  .card:hover .card__image {
    opacity: 0; /* Hide the image when hovering */
  }

  /* Hover effect */
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px #000000;
    background-color: #f2f2f2;
    color: #ffffff;
  }
`;

