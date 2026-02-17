import styled from "styled-components";

const Wrappers = styled.section`
  padding: 8rem 2rem;
  background: var(--background);
  
  .container {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    color: var(--foreground);
  }

  .left p {
    margin-top: 1.5rem;
    font-size: 1.1rem;
    color: var(--muted);
  }

  .right {
    background: var(--glass);
    border: 1px solid var(--border);
    padding: 3rem;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }

  .row {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  input, textarea {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border);
    padding: 1rem;
    border-radius: 12px;
    color: var(--foreground);
    outline: none;
    transition: all 0.2s ease;
    font-family: var(--font-body);
  }

  input:focus, textarea:focus {
    border-color: var(--primary);
    background: rgba(59, 130, 246, 0.05);
  }

  .submit-btn {
    width: 100%;
    padding: 1rem;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px var(--primary-glow);
  }

  @media (max-width: 900px) {
    padding: 4rem 1.5rem;
    .container {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .right {
      padding: 2rem;
    }
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export default Wrappers;
