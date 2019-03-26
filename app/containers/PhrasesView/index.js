/**
 *
 * PhrasesView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectPhrases,
} from 'containers/App/selectors';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class PhrasesView extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>PhrasesView</title>
          <meta name="description" content="Description of PhrasesView" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

PhrasesView.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  phrases: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  phrases: makeSelectPhrases(),
});

const withConnect = connect(mapStateToProps);

const withSaga = injectSaga({ key: 'phrasesView', saga });

export default compose(
  withSaga,
  withConnect,
)(PhrasesView);
