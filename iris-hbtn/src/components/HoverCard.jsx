import styled from 'styled-components';

export const Card = ({ img }) => {
  return (
    <StyledWrapper>
      <section id="card1" className="card">
        <img src={img} alt="Santiago" />
        <div className="card__content">
          <p className="card__title">Lorem Ipsum</p>
          <p className="card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
            justo vel lorem tincidunt ultrices at non nunc. Donec in sapien viverra,
            tincidunt augue id, efficitur massa.
          </p>
        </div>
      </section>
    </StyledWrapper>
  );
}

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
  }

  /* Style the image to fill the card */
  .card img {
    width: 100%;
    height: 100%;  /* Ensures the image covers the area without distortion */
    position: absolute;  /* Position it behind the text content */
    top: 0;
    left: 0;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px #000000;
    background-color: #f2f2f2;
    color: #ffffff;
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
    z-index: 2;  /* Make sure the text is above the image */
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
    font-size: 14px;
    color: #000000;
    line-height: 1.4;
  }
`;

