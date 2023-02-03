import styled from "styled-components";
const Wrappers = styled.div`
  margin: 2rem 0;
  .left {
    background: url("/project1.png");
  }
  .heading {
    text-align: center;
    margin: 2rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    padding: 2rem;
  }
  .description {
    max-width: 300px;
    text-align: center;
  }

  .title {
    text-align: center;
  }
`;
export default Wrappers;
