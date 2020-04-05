import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -ms-flex: 1;
    flex: 1;
    background-color: #353547;
  }
  body, input, button {
    font: 14px Roboto, sans-serif;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;

    &:hover {
    text-decoration: none;
  }
  }

  section {
    display: flex;
  }
`
