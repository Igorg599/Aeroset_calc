import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'

// noinspection Stylelint
export const GlobalStyle = createGlobalStyle`
  ${normalize};
  
   html, body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    width: calc(100vw - 17px);
    font-family: 'Roboto', 'Segoe UI',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    *, *:before, *:after {
    box-sizing: inherit;
    touch-action: none;
    -ms-touch-action: none;
    }
  }

  code {
    font-family: source-code-pro, monospace;
  }
`