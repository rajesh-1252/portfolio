import styled from "styled-components";

const Wrappers = styled.div`
  /* background-color: red; */
  margin-bottom: -8rem;
  background-color: #000c24;
  position: sticky;
  z-index: 1000;
  top: -1px;
  .bg {
  }
  nav {
    margin-left: 3rem;
  }
  ul {
    font-family: bite-chocolate;
    padding: 3rem 2rem;
    width: 60vw;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  a {
    color: var(--font-color);
  }
  @media (max-width: 900px) {
    nav {
      display: none;
    }
  }
`;
export default Wrappers;
