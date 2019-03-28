/**
 *
 * AddPhrase
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { addPhrase } from 'containers/App/actions';

import Button from 'components/Button';
import H1 from 'components/H1';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorView from 'components/ErrorView';

import Wrapper from './Wrapper';
import messages from './messages';
import Form from './Form';
import Input from './Input';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class AddPhrase extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      phraseInput: '',
    };
  }

  // controlled component handler
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  // handle submission of new phrase to kick off dispatch
  handleSubmit = evt => {
    evt.preventDefault();
    const text = this.state.phraseInput;
    this.props.addPhrase(text);
  };

  render() {
    const { loading, error } = this.props;
    const { phraseInput } = this.state;

    return (
      <Wrapper>
        <Helmet>
          <title>Add a phrase</title>
          <meta name="description" content="Description of AddPhrase" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Form onSubmit={this.handleSubmit}>
          <Input
            disabled={loading}
            placeholder="add new phrase!"
            type="text"
            name="phraseInput"
            value={phraseInput}
            onChange={this.handleChange}
            borderColor="orange"
          />
          <Button
            disabled={loading || phraseInput.length === 0}
            color="black"
            bgColor="#ffe6b3"
            hoverBgColor="orange"
            hoverTextColor="white"
            borderColor="gray"
          >
            Add
          </Button>
        </Form>
        {loading && <LoadingIndicator />}
        {error && (
          <ErrorView>
            <ErrorView.Image emoji="⚠️" />
            <ErrorView.Message>
              Error adding phrase! Try again later.
            </ErrorView.Message>
          </ErrorView>
        )}
      </Wrapper>
    );
  }
}

AddPhrase.propTypes = {
  addPhrase: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  {
    addPhrase,
  },
);

const withSaga = injectSaga({ key: 'addPhrase', saga });

export default compose(
  withSaga,
  withConnect,
)(AddPhrase);
