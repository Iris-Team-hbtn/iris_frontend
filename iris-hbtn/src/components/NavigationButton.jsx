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
  /* This makes the wrapper behave like a flex container */
  display: inline-flex;
  align-items: center;

  button {
    color: white;
    text-decoration: none;
    font-size: 25px;
    border: none;
    background: none;
    font-weight: 500;
    white-space: nowrap;
    padding: 10px 10px;
    cursor: pointer;
  }

  /* Prevent wrapping and make buttons responsive */
  @media (max-width: 768px) {
    button {
      font-size: 17px;
      padding: 4px 5px;
    }
  }

  /* Button hover effect */
  button::before, button::after {
    content: '';
    width: 0%;
    height: 2px;
    background: rgb(255, 255, 255);
    display: block;
    transition: 0.5s;
  }

  button:hover::after, button:hover::before {
    width: 100%;
  }
`;
