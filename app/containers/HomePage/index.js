/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import H1 from 'components/H1';
import messages from './messages';

const P = styled.p`
  font-family: Helvetica;
  font-weight: 200;
  text-align: center;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <P>
          <FormattedMessage {...messages.intro} />
        </P>
      </div>
    );
  }
}
