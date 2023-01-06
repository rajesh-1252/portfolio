import styled from "styled-components";
import bgImage from "/backgroundPrimary.png";
const Wrappers = styled.div`
  .bg-img {
    width: 100vw;
    height: 200vh;
    background-image: url("/backgroundPrimary.svg");
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
  }
  h1 {
    font-family: bite-chocolate;
    font-size: 2.5rem;
    color: var(--font-color);
  }
  .intro {
    position: absolute;
    top: 40%;
    left: 10%;
  }
  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 900px) {
    .bg-img {
      background-color: var(--primary-900);
      background-image: none;
    }
    .intro {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Wrappers;
