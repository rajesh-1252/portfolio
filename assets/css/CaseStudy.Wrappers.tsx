import styled from "styled-components";

const Wrappers = styled.section`
  min-height: 100vh;
  background: var(--background);
  color: var(--foreground);
  padding-bottom: 8rem;

  .hero {
    position: relative;
    padding: 10rem 2rem 6rem;
    overflow: hidden;
    text-align: center;
  }

  .bg-mesh {
    position: absolute;
    inset: 0;
    z-index: -1;
    background: radial-gradient(at 0% 0%, hsla(222, 47%, 12%, 1) 0, transparent 50%),
                radial-gradient(at 100% 0%, hsla(222, 47%, 12%, 1) 0, transparent 50%);
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary);
    font-weight: 600;
    margin-bottom: 2rem;
    text-decoration: none;
    transition: transform 0.2s ease;
  }

  .back-link:hover {
    transform: translateX(-5px);
  }

  .tag {
    display: block;
    color: var(--primary);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  .tagline {
    font-size: 1.5rem;
    color: var(--muted);
    font-weight: 400;
    max-width: 700px;
    margin: 0 auto 3rem;
  }

  .feature-image {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 32px;
    border: 1px solid var(--border);
    overflow: hidden;
    position: relative;
    box-shadow: 0 40px 80px rgba(0,0,0,0.6);
    background: var(--glass);
    margin-bottom: 4rem;
  }

  .content-section {
    margin-bottom: 5rem;
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  h2::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  p {
    font-size: 1.15rem;
    line-height: 1.8;
    color: var(--muted);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    background: var(--glass);
    border: 1px solid var(--border);
    padding: 2.5rem;
    border-radius: 24px;
    transition: all 0.3s ease;
  }

  .feature-card:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
  }

  .feature-card h3 {
    color: var(--foreground);
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .tech-matrix {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    background: var(--glass);
    padding: 3rem;
    border-radius: 32px;
    border: 1px solid var(--border);
  }

  .tech-group h4 {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: var(--muted);
    letter-spacing: 0.1em;
    margin-bottom: 0.8rem;
  }

  .tech-group p {
    color: var(--foreground);
    font-size: 1.1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .hero {
      padding-top: 6rem;
    }
    .tech-matrix {
      padding: 2rem;
    }
  }
`;

export default Wrappers;
