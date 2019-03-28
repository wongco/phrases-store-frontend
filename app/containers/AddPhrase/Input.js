import styled from 'styled-components';

const Input = styled.input`
  height: 2em;
  padding: 0 1em;
  width: 100%;
  border: 1px solid ${({ borderColor }) => borderColor || 'black'};
  ${({ disabled }) => disabled && 'color: gray'};
`;

export default Input;
