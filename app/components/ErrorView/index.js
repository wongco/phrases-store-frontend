import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import EmojiWrapper from './EmojiWrapper';
import ErrorMessageWrapper from './ErrorMessageWrapper';

class ErrorView extends PureComponent {
  static Image = props => <EmojiWrapper>{props.emoji}</EmojiWrapper>;

  static Message = props => (
    <ErrorMessageWrapper>{props.children}</ErrorMessageWrapper>
  );

  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

ErrorView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default ErrorView;
