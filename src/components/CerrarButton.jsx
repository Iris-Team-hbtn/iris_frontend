import styled from 'styled-components';
import propTypes from 'prop-types';

const Button = ({handleConfirm}) => {
  return (
    <StyledWrapper>
      <button onClick={handleConfirm} className="button">
        <span className="lable">Cerrar</span>
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
    width: 150px;
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
    handleConfirm: propTypes.func.isRequired,
  }
  