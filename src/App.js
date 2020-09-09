import React, { Suspense } from 'react';
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./theme";
import MainView from "./MainView";
import Loader from "./Loader";


function App() {
  return (
    <div id="main">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          <MainView/>
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
