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
import { loadPhrases } from 'containers/App/actions';

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
  componentDidMount() {
    this.props.loadPhrases();
  }

  render() {
    const { loading, error, phrases } = this.props;

    return (
      <div>
        <Helmet>
          <title>Show All Phrases</title>
          <meta name="description" content="Description of PhrasesView" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <div>
          {loading && <div>Loading!</div>}
          {error && (
            <div>
              Something went wrong! Could not retreieve updated results.
            </div>
          )}
          {phrases &&
            phrases.map(phrase => <div key={phrase.id}>{phrase.text}</div>)}
        </div>
      </div>
    );
  }
}

PhrasesView.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  phrases: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loadPhrases: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  phrases: makeSelectPhrases(),
});

const withConnect = connect(
  mapStateToProps,
  {
    loadPhrases,
  },
);

const withSaga = injectSaga({ key: 'phrasesView', saga });

export default compose(
  withSaga,
  withConnect,
)(PhrasesView);
