import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import EmojiWrapper from './EmojiWrapper';

class ErrorView extends PureComponent {
  static Image = props => <EmojiWrapper>{props.emoji}</EmojiWrapper>;

  static Message = props => <div>{props.children}</div>;

  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

ErrorView.propTypes = {
  children: PropTypes.array,
};

export default ErrorView;
