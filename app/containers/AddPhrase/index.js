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

import Button from 'components/Button';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import messages from './messages';
import Form from './Form';
import Input from './Input';

/* eslint-disable react/prefer-stateless-function */
export class AddPhrase extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      phraseInput: '',
    };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    // const text = this.state.phraseInput;
    // dispatch api loading action of application state

    // create saga to send off request to API, and then update state to non loading

    // then redirect to new page after
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>AddPhrase</title>
          <meta name="description" content="Description of AddPhrase" />
        </Helmet>
        <Form onSubmit={null}>
          <FormattedMessage {...messages.header} />
          <Input
            borderColor="red"
            placeholder="the cow jumped over the moon."
            type="text"
            name="phraseInput"
            value={this.state.phraseInput}
            onChange={this.handleChange}
          />
          <Button onClick={null}>Add</Button>
        </Form>
      </div>
    );
  }
}

AddPhrase.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'addPhrase', saga });

export default compose(
  withSaga,
  withConnect,
)(AddPhrase);
