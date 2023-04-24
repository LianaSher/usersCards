import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'GlobalStyles';

import { Header } from './Header/Header';
import { HomePage } from 'pages/HomePage/HomePage';
import { Tweets } from 'pages/Tweets/Tweets';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
