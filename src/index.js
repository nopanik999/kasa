import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { createGlobalStyle, css, ThemeProvider } from 'styled-components';

import { Footer, Header } from './components';
import { getPath } from './libs/routes';
import { breakpoints, sizes } from './libs/styles';
import { themeColors } from './libs/themes';
import { About, Home, Lease, NotFound } from './pages';
import reportWebVitals from './reportWebVitals';
import { PageContainer } from './style';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat';
        font-size: ${sizes.fontSize.extraSmall};
        background-color: ${props => props.theme.background};
        ${props => {
          return css`
            color: ${props.theme.text};
          `;
        }}
        margin: 0;
        padding: 1rem 2rem;
        @media ${breakpoints.laptop} {
          font-size: ${sizes.fontSize.large};
          padding: 1rem 6rem;
        }
    }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={themeColors}>
        <GlobalStyle />
        <Header />
        <PageContainer>
          <Routes>
            <Route path={getPath('home')} element={<Home />} />
            <Route path={getPath('about')} element={<About />} />
            <Route path={getPath('lease')} element={<Lease />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageContainer>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
