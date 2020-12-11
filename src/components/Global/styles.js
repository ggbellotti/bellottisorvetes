import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root{
    --main-color: #2B1500;
    --second-color: #844009;
    --third-color: #FFE4C4;
    --fourth-color: #F25B22;
    --bg-highlight: #FCFCFC;

    --animations-time: 0.195s ease;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  /*  
    Extra light: 200
    Light: 300
    Regular: 400
    Bold: 700
  */
  body {
    font-size: 16px;
    font-weight: normal;
    font-family: "Titillium Web";  
    line-height: 1;
    &.showMenu{
      overflow: hidden;
    }
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  h1{
    font-size: 2.125rem;
    font-family: "Playfair Display";
    margin-bottom: 0.9375rem;
    font-weight: 500;
    letter-spacing: 0.0437rem;
  }
  h2{
    font-family: "Titillium Web";    
    font-weight: 300;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    margin-bottom: 0.625rem;
  }
  h3{
    font-family: "Playfair Display";
    font-size: 1.5rem;
    letter-spacing: 0.0437rem;
    margin-bottom: 0.9375rem;
  }
  p{
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.0437rem;
    margin-bottom: 1.25rem;
    line-height: 24px;
  }
  a{
    text-decoration: none;
    transition: all var(--animations-time);
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--main-color);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--second-color);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--second-color);
  }
  ::-moz-selection { 
    color: #fff;
    background-color: var(--second-color);
  }
  ::selection { 
    color: #fff;
    background-color: var(--second-color);
  }
`
export default GlobalStyle
