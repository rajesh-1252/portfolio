import styled from "styled-components";

const Wrappers = styled.section`
  padding: 8rem 2rem;
  background: var(--background);
  
  .container {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
  }

  .timeline-track {
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--border);
  }

  .experience-item {
    position: relative;
    padding-left: 5rem;
    margin-bottom: 4rem;
  }

  .dot {
    position: absolute;
    left: 1.6rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    background: var(--primary);
    border-radius: 50%;
    box-shadow: 0 0 15px var(--primary-glow);
    z-index: 2;
  }

  .content {
    background: var(--glass);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .content:hover {
    border-color: var(--primary);
    background: rgba(59, 130, 246, 0.05);
  }

  h2 {
    font-size: 1.5rem;
    color: var(--foreground);
    margin-bottom: 0.25rem;
  }

  .role-title {
    color: var(--primary);
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    display: block;
  }

  .timeline {
    font-size: 0.9rem;
    color: var(--muted);
    font-weight: 500;
    margin-bottom: 1rem;
    display: block;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--muted);
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    .timeline-track {
      left: 1rem;
    }
    .experience-item {
      padding-left: 3rem;
    }
    .dot {
      left: 0.6rem;
    }
    .content {
      padding: 1.5rem;
    }
  }
`;

export default Wrappers;
