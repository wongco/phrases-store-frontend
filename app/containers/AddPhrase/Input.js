import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid ${props => props.borderColor || 'black'};
`;

export default Input;
