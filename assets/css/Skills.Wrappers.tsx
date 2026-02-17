import styled from "styled-components";

const Wrappers = styled.section`
  padding: 8rem 2rem;
  background: var(--background);
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .title-section {
    margin-bottom: 4rem;
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .skill-card {
    background: var(--glass);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 2.5rem;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .skill-card:hover {
    transform: translateY(-8px);
    border-color: var(--primary);
    background: rgba(59, 130, 246, 0.05);
  }

  .skill-card h3 {
    font-size: 1.5rem;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .tech-badge {
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 100px;
    font-size: 0.9rem;
    color: var(--muted);
    border: 1px solid var(--border);
    transition: all 0.2s ease;
  }

  .tech-badge:hover {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    .skills-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default Wrappers;
