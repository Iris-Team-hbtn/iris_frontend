import styled from 'styled-components';

export const Button = ({ content, scrollTo }) => {
  return (
    <StyledWrapper>
      <button onClick={scrollTo}>
        {content}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    color: white;
    text-decoration: none;
    font-size: 25px;
    border: none;
    background: none;
    font-weight: 600;
    white-space: nowrap;
    padding: 10px 20px;
  }

  /* Prevent wrapping and make buttons responsive */
  @media (max-width: 768px) {
    button {
      font-size: 18px;  /* Smaller font size on mobile */
      padding: 4px 10px; /* Adjust button padding for smaller screens */
    }
  }

  button::before {
    margin-left: auto;
  }

  button::after, button::before {
    content: '';
    width: 0%;
    height: 2px;
    background: rgb(103, 171, 216);
    display: block;
    transition: 0.5s;
  }

  button:hover::after, button:hover::before {
    width: 100%;
  }
`;
