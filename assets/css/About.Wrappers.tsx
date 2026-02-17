import styled from "styled-components";

const Wrappers = styled.section`
  padding: 8rem 2rem;
  background: var(--background);
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .left {
    position: relative;
    aspect-ratio: 1/1;
    background: var(--glass);
    border-radius: 20px;
    border: 1px solid var(--border);
    overflow: hidden;
    background-image: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200');
    background-size: cover;
    background-position: center;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  h3 {
    font-size: 2.5rem;
    color: var(--foreground);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.15rem;
    line-height: 1.8;
    color: var(--muted);
  }

  .highlight {
    color: var(--foreground);
    font-weight: 500;
  }

  @media (max-width: 900px) {
    padding: 4rem 1.5rem;
    .container {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }
    .left {
      display: none;
    }
    h3 {
      font-size: 2rem;
    }
  }
`;

export default Wrappers;
