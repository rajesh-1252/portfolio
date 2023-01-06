import styled from "styled-components";

const Wrappers = styled.div`
  margin-top: 5rem;
  .circle {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: black;
    position: absolute;
    top: 2rem;
    z-index: 10;
  }
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 100px auto;
  }
  .container {
    padding: 10px 50px;
    position: relative;
    width: 50%;
    animation: movedown 1s linear forwards;
    opacity: 0;
  }
  @keyframes movedown {
    0% {
      opacity: 1;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .text-box {
    padding: 1.7rem 2.5rem;
    background: var(--primary-900);
    color: white;
    position: relative;
    border-radius: 6px;
    font-size: 1rem;
  }
  .text-box h2 {
    color: var(--font-color);
    font-family: bite-chocolate;
    margin-bottom: 1rem;
  }
  small {
    background-color: var(--red);
    padding: 3px 5px;
    border-radius: 2rem;
  }
  .text-box p {
    margin-top: 1rem;
  }
  .container:nth-child(2n) {
    left: 50%;
  }
  .container:nth-child(2n) .circle {
    left: -1.4rem;
  }
  .container:nth-child(2n-1) .circle {
    right: -1.6rem;
  }
  .container:nth-child(2n -1) {
    left: 0;
  }
  .right-arrow {
    right: -0.9rem;
    border-left: 15px solid var(--red);
  }
  .left-arrow,
  .right-arrow {
    height: 0;
    width: 0;
    position: absolute;
    top: 33px;
    z-index: 1;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
  }
  .left-arrow {
    left: -0.9rem;
    border-right: 15px solid var(--red);
  }

  .timeline:after {
    content: "";
    position: absolute;
    background-color: black;
    width: 0.5rem;
    height: 100%;
    top: 0;
    left: 50%;
    margin-left: -3px;
    z-index: -1;
    animation: moveline 6s linear forwards;
  }
  @keyframes moveline {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }
  @media (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    .timeline {
      margin: 50px auto;
    }
    .timeline::after {
      left: 31px;
    }
    .container {
      width: 100%;
      padding-left: 80px;
      padding-right: 25px;
    }
    .text-box {
      font-size: 13px;
    }
    .container:nth-child(2n) {
      left: 0;
    }
    .container:nth-child(2n) .circle {
      left: 0.5rem;
    }
    .container:nth-child(2n-1) .circle {
      left: 0.5rem;
    }
    .container:nth-child(2n -1) {
      left: 0;
    }
    .right-arrow {
      left: -0.9rem;
      border-left: 0;
      border-right: 15px solid var(--red);
    }
  }
`;
export default Wrappers;
