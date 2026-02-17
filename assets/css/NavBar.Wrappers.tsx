import styled from "styled-components";

const Wrappers = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 2rem;
  background: rgba(10, 10, 12, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: center;

  nav {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--foreground);
    letter-spacing: -0.02em;
  }

  ul {
    display: flex;
    gap: 2.5rem;
    align-items: center;
  }

  a {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--muted);
    transition: all 0.2s ease;
    text-transform: capitalize;
  }

  a:hover {
    color: var(--foreground);
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    ul {
      display: none;
    }
  }
`;

export default Wrappers;
