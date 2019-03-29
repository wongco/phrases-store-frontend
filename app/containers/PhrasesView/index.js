/* eslint-disable indent */
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
import { loadPhrases, clearAppError } from 'containers/App/actions';
import H1 from 'components/H1';
import ErrorView from 'components/ErrorView';
import LoadingIndicator from 'components/LoadingIndicator';

import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectPhrases,
} from 'containers/App/selectors';
import PhraseViewWrapper from './PhraseViewWrapper';
import PhrasesWrapper from './PhrasesWrapper';
import Phrase from './Phrase';
import NoticeWrapper from './NoticeWrapper';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class PhrasesView extends React.PureComponent {
  componentDidMount() {
    this.props.loadPhrases();
  }

  componentWillUnmount() {
    this.props.clearAppError();
  }

  render() {
    const { loading, error, phrases } = this.props;

    return (
      <PhraseViewWrapper>
        <Helmet>
          <title>Show All Phrases</title>
          <meta name="description" content="Description of PhrasesView" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        {error && (
          <ErrorView>
            <ErrorView.Image emoji="🛑" />
            <ErrorView.Message>
              <FormattedMessage {...messages.error} />
            </ErrorView.Message>
          </ErrorView>
        )}
        <PhrasesWrapper>
          {loading ? (
            <LoadingIndicator />
          ) : (
            <ul>
              {phrases.map(phrase => (
                <Phrase key={phrase.id} text={phrase.text} />
              ))}
            </ul>
          )}
          {phrases.length === 0 &&
            !error && (
              <NoticeWrapper>
                <FormattedMessage {...messages.notice} />
              </NoticeWrapper>
            )}
        </PhrasesWrapper>
      </PhraseViewWrapper>
    );
  }
}

PhrasesView.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  phrases: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loadPhrases: PropTypes.func,
  clearAppError: PropTypes.func,
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
    clearAppError,
  },
);

const withSaga = injectSaga({ key: 'phrasesView', saga });

export default compose(
  withSaga,
  withConnect,
)(PhrasesView);
