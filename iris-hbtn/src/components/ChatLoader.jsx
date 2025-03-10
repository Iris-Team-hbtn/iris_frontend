import styled from 'styled-components';

export const ChatLoader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path fill="#1f3685" d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z" />
          </svg></span>
        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path fill="#1f3685" d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z" />
          </svg></span>
        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path fill="#1f3685" d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z" />
          </svg></span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
  }

  .loader span {
    width: 25px;
    height: 20px;
    margin: -5px;
    animation: dots_411 1.5s infinite ease-in-out;
  }

  .loader span:nth-child(1) {
    -webkit-animation-delay: -.40s;
    animation-delay: -.40s;
  }

  .loader span:nth-child(2) {
    -webkit-animation-delay: -.25s;
    animation-delay: -.25s;
  }

  .loader span:nth-child(3) {
    -webkit-animation-delay: -.10s;
    animation-delay: -.10s;
  }

  @keyframes dots_411 {
    5% {
      opacity: 0;
    }

    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    40% {
      -webkit-transform: scale(.8);
      transform: scale(.8);
    }
  }`;
