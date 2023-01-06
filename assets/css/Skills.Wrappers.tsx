import styled from "styled-components";

const Wrappers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: var(--margin-left);
  background-image: url("/experienceBackground.svg");
  background-position-x: right;
  background-position-y: bottom;
  background-repeat: no-repeat;

  .top {
    margin-bottom: 3rem;
  }
  .top h1 {
    color: var(--red);
    margin-bottom: 2rem;
  }
  .top p {
    font-size: 1.4rem;
    max-width: 500px;
  }

  .role {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
    font-size: 1.2rem;
    border: 1px solid black;
    margin-bottom: 1rem;
  }
  .role p {
    padding: 2rem 0.5rem;
  }
  .technology {
    border: 1px solid black;
    max-width: 500px;
    height: 270px;
    display: flex;
    gap: 3rem 1rem;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 1rem;
  }

  .tech {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .${(props) => props.role} {
    background-color: red;
  }
  .role {
    background-color: white;
  }
  .bottom {
    margin-bottom: 2rem;
  }
  .right {
    margin-right: var(--margin-right);
  }
  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: none;
    .top h1,
    p {
      text-align: center;
    }
    .left {
    }
    .right {
    }
  }
`;
export default Wrappers;
