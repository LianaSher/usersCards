import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Montserrat', sans-serif;
 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
button {
    cursor: pointer;
}
`;
