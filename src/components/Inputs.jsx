import styled from 'styled-components';
import propTypes from 'prop-types';

const Input = ({input_value, value, onChange, type}) => {
  return (
    <StyledWrapper>
      <div className="group">
        <input required type={type} value={value} className="input" onChange={onChange}/>
        <span className="highlight" />
        <span className="bar" />
        <label>{input_value}</label>
        
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .group {
   position: relative;
  }

  .input {
   font-size: 16px;
   padding: 10px 10px 10px 5px;
   display: block;
   width: 200px;
   border: none;
   border-bottom: 1px solid #515151;
   background: transparent;
  }

  .input:focus {
   outline: none;
  }

  label {
   color: #999;
   font-size: 18px;
   font-weight: normal;
   position: absolute;
   pointer-events: none;
   left: 5px;
   top: 10px;
   transition: 0.2s ease all;
   -moz-transition: 0.2s ease all;
   -webkit-transition: 0.2s ease all;
  }

  .input:focus ~ label, .input:valid ~ label {
   top: -20px;
   font-size: 14px;
   color: #5264AE;
  }

  .bar {
   position: relative;
   display: block;
   width: 200px;
  }

  .bar:before, .bar:after {
   content: '';
   height: 2px;
   width: 0;
   bottom: 1px;
   position: absolute;
   background: #5264AE;
   transition: 0.2s ease all;
   -moz-transition: 0.2s ease all;
   -webkit-transition: 0.2s ease all;
  }

  .bar:before {
   left: 50%;
  }

  .bar:after {
   right: 50%;
  }

  .input:focus ~ .bar:before, .input:focus ~ .bar:after {
   width: 50%;
  }

  .highlight {
   position: absolute;
   height: 60%;
   width: 100px;
   top: 25%;
   left: 0;
   pointer-events: none;
   opacity: 0.5;
  }

  .input:focus ~ .highlight {
   animation: inputHighlighter 0.3s ease;
  }

  @keyframes inputHighlighter {
   from {
    background: #5264AE;
   }

   to {
    width: 0;
    background: transparent;
   }
  }`;

export default Input;
Input.propTypes = {
    input_value: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired
  }
