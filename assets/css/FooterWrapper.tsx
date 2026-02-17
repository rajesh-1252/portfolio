import styled from "styled-components";

const Wrappers = styled.footer`
  padding: 4rem 2rem;
  background: #070708;
  border-top: 1px solid var(--border);
  text-align: center;
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .social-link {
    filter: grayscale(1) opacity(0.6);
    transition: all 0.3s ease;
  }

  .social-link:hover {
    filter: grayscale(0) opacity(1);
    transform: translateY(-3px);
  }

  p {
    font-size: 0.95rem;
    color: var(--muted);
    margin-bottom: 0.5rem;
  }

  .inspiration a, .rights a {
    color: var(--foreground);
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .inspiration a:hover, .rights a:hover {
    color: var(--primary);
  }

  .rights {
    margin-top: 1.5rem;
    font-size: 0.85rem;
    opacity: 0.7;
  }
`;

export default Wrappers;
