import styled from "styled-components";

const Wrappers = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  .bg-mesh {
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: var(--background);
    background-image: 
      radial-gradient(at 0% 0%, hsla(222, 47%, 11%, 1) 0, transparent 50%), 
      radial-gradient(at 100% 0%, hsla(222, 47%, 11%, 1) 0, transparent 50%);
  }

  .intro {
    max-width: 800px;
    padding: 0 2rem;
  }

  .name {
    font-size: clamp(3rem, 10vw, 5rem);
    line-height: 1;
    margin-bottom: 0.5rem;
    color: var(--foreground);
  }

  .profession {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    font-weight: 500;
    color: var(--primary);
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .description {
    font-size: 1.25rem;
    max-width: 600px;
    margin-bottom: 2.5rem;
    color: var(--muted);
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .social-link {
    transition: transform 0.3s ease, filter 0.3s ease;
    filter: grayscale(1) opacity(0.5);
  }

  .social-link:hover {
    transform: translateY(-4px);
    filter: grayscale(0) opacity(1);
  }

  @media (max-width: 768px) {
    .intro {
      text-align: center;
      margin: 0 auto;
    }
    .social-links {
      justify-content: center;
    }
  }
`;

export default Wrappers;
