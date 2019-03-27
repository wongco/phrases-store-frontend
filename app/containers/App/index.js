/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PhrasesView from 'containers/PhrasesView/Loadable';
import AddPhrase from 'containers/AddPhrase/Loadable';
import NavBar from './NavBar';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: calc(768px + 1em * 2);
  padding: 0 1em;
  margin: 0 auto;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet>
        <title>The Phrases Store</title>
        <meta name="description" content="a phrase storing application" />
      </Helmet>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/phrases" component={PhrasesView} />
        <Route exact path="/add" component={AddPhrase} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
