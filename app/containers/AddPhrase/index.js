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
import { compose } from 'redux';
import { addPhrase } from 'containers/App/actions';
import styled from 'styled-components';

import Button from 'components/Button';
import injectSaga from 'utils/injectSaga';
import messages from './messages';
import Form from './Form';
import Input from './Input';
import saga from './saga';

const H1 = styled.h1`
  text-align: center;
  font-size: 200%;
`;

const AddPhraseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    return (
      <AddPhraseWrapper>
        <Helmet>
          <title>Add a phrase</title>
          <meta name="description" content="Description of AddPhrase" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Form onSubmit={this.handleSubmit}>
          <Input
            borderColor="lightgray"
            placeholder="add new phrase!"
            type="text"
            name="phraseInput"
            value={this.state.phraseInput}
            onChange={this.handleChange}
          />
          <Button hoverColor="orange" hoverTextColor="white" borderColor="gray">
            Add
          </Button>
        </Form>
      </AddPhraseWrapper>
    );
  }
}

AddPhrase.propTypes = {
  addPhrase: PropTypes.func.isRequired,
};

const withConnect = connect(
  null,
  {
    addPhrase,
  },
);

const withSaga = injectSaga({ key: 'addPhrase', saga });

export default compose(
  withSaga,
  withConnect,
)(AddPhrase);
