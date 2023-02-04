import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: #000;
    color: #fff;
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 0.5rem;
    background: #fff;
  `;
export const Title = styled.h1`
    line-height: 1.15;
    font-size: 4rem;
    color: #0070f3;
  `;

export const Paragraph = styled.p`
    line-height: 1.5;
    font-size: 1.5rem;
    color: #0070f3;
    text-decoration-color: #0070f3;
`;

export const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    right: 0;
    color: #0070f3;
    padding: 1rem;
    font-size: 2rem;
  `;
export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  `;
export const Description = styled.p`
    line-height: 1.5;
    font-size: 1.5rem;
    color: #0070f3;
  `;
export const Li = styled.li`
  color: black;
`;