import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 5em;
  border: 1px solid ${({ borderColor }) => borderColor || 'black'};

  &:hover {
    ${({ hoverColor }) => hoverColor && `background-color: ${hoverColor}`};
    ${({ hoverTextColor }) => hoverTextColor && `color: ${hoverTextColor}`};
  }
`;

Button.propTypes = {
  borderColor: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
};

export default Button;
