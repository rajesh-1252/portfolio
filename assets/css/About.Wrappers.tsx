import styled from "styled-components";
const Wrappers = styled.div`
  margin-top: -100vh;
  .container {
    margin-top: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left,
  .right {
  }
  .left {
    width: 500px;
    margin-left: 6rem;
  }
  .left {
    background: url("/aboutme.gif");
    height: 500px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .right {
    margin-top: -6rem;
    width: 700px;
    margin-right: 6rem;
  }
  h3 {
    font-size: 2rem;
    color: red;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
  @media (max-width: 900px) {
    p {
      color: white;
    }
    .container {
      margin-top: 0;
      flex-wrap: wrap-reverse;
    }
    .right {
      text-align: center;
      margin: 0 auto;
      padding: 1rem;
      margin-bottom: 4rem;
    }
    .left {
      margin: 0 auto;
    }
  }
`;
export default Wrappers;
