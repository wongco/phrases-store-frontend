/* eslint-disable indent */
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 5em;
  border: 1px solid ${({ borderColor }) => borderColor || 'black'};
  color: ${({ color, disabled }) => (!disabled && color) || 'gray'};
  background-color: ${({ bgColor, disabled }) => !disabled && bgColor};

  &:hover {
    background-color: ${({ hoverBgColor, disabled }) =>
      !disabled && hoverBgColor};
    color: ${({ hoverColor, disabled }) => !disabled && hoverColor};
  }
`;

Button.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default Button;
