import styled from 'styled-components';
import propTypes from 'prop-types';

const Button = ({openingConfirmation, handleSubmit}) => {
  function handleClick() {
    openingConfirmation()
    handleSubmit()
  }
  return (
    <StyledWrapper>
      <button onClick={handleClick} className="button">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 24 24" height={24} fill="none" className="svg-icon"><g strokeWidth={2} strokeLinecap="round" stroke="#fff"><rect y={5} x={4} width={16} rx={2} height={16} /><path d="m8 3v4" /><path d="m16 3v4" /><path d="m4 11h16" /></g></svg>
        <span className="lable">Confrirmar</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px 12px;
    gap: 8px;
    height: 40px;
    width: 201px;
    border: none;
    background: #3498db;
    border-radius: 20px;
    cursor: pointer;
  }

  .lable {
    line-height: 22px;
    font-size: 17px;
    color: #fff;
    font-family: sans-serif;
    letter-spacing: 1px;
  }

  .button:hover {
    background:rgb(39, 109, 156);
  }

  .button:hover .svg-icon {
    animation: slope 1s linear infinite;
  }

  @keyframes slope {
    0% {
    }

    50% {
      transform: rotate(10deg);
    }

    100% {
    }
  }`;

export default Button;

Button.propTypes = {
    openingConfirmation: propTypes.func.isRequired,
  }
  