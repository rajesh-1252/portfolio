import styled from "styled-components";
const Wrappers = styled.div`
  background-image: url("/contactBg.svg");
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 90%;
    margin: 0 auto;
    background-color: white;
    padding: 3rem;
  }
  h1 {
    font-size: 3rem;
  }
  .left,
  .right {
    width: 500px;
  }
  .left {
    margin: auto 0;
  }

  form {
  }
  .row {
    display: flex;
    flex-direction: column;
  }
  input {
    outline: none;
    margin-bottom: 2rem;
    padding: 1rem;
  }
  input:focus {
  }

  .btn {
    border: none;
    padding: 1rem;
    background: var(--primary-900);
    color: white;
    border-radius: 1rem;
  }
  @media screen and (max-width: 420px) {
    h1 {
      font-size: 2rem;
      text-align: center;
    }
  }
`;
export default Wrappers;
