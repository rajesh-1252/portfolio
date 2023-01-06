import styled from "styled-components";
const Wrappers = styled.div`
  background-color: var(--primary-900);
  color: white;
  text-align: center;
  padding: 1rem;
  p {
    padding-bottom: 1rem;
  }
  .rights {
    padding-bottom: 0rem;
  }
  a {
    font-weight: 550;
    color: #e34b13;
  }
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;
export default Wrappers;
