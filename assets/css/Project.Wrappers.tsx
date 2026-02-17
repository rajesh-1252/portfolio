import styled from "styled-components";

const Wrappers = styled.section`
  padding: 8rem 2rem;
  background: var(--background);
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .title-section {
    margin-bottom: 5rem;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  .projects-grid {
    display: flex;
    flex-direction: column;
    gap: 6rem;
  }

  .project-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .project-card.reverse {
    direction: rtl;
  }
  .project-card.reverse .content-box {
    direction: ltr;
  }

  .image-box {
    position: relative;
    aspect-ratio: 16/9;
    background: var(--glass);
    border-radius: 24px;
    border: 1px solid var(--border);
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
    transition: transform 0.5s ease;
  }

  .project-card:hover .image-box {
    transform: scale(1.02) translateY(-10px);
    border-color: var(--primary);
  }

  .content-box {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  h2 {
    font-size: 2.2rem;
    color: var(--foreground);
  }

  .tag {
    color: var(--primary);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.9rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--muted);
  }

  .tech-stack {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .tech-item {
    font-size: 0.9rem;
    color: var(--foreground);
    font-weight: 500;
  }

  .live-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary);
    font-weight: 600;
    margin-top: 1rem;
    transition: gap 0.2s ease;
  }

  .live-link:hover {
    gap: 0.8rem;
  }

  @media (max-width: 900px) {
    padding: 4rem 1.5rem;
    .project-card {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .project-card.reverse {
      direction: ltr;
    }
    h2 {
      font-size: 1.8rem;
    }
  }
`;

export default Wrappers;
