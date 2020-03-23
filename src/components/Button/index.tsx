import React from 'react';
import styled, {css} from 'styled-components';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../redux/reducers';

interface Props extends ConnectedProps<typeof connector>, HTMLButtonElement {
  colored?: boolean
}

const Button = styled(({className, children, onClick, type}) => (
  <button
    onClick={onClick}
    className={className}
    type={type}
  >
    {children}
  </button>
))`
  display: inline-block;
  width: 100%;
  border-radius: 10px;
  text-align: center;
  padding: 10px 20px;
  box-shadow: 0 0 0 0;
  border: 0;
  color: ${props => props.theme.element.colors.color};
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  
  ${props => props.colored && css`
    background: ${props.theme.element.colors.bg.active};
  `}
  
  &:hover {
    cursor: pointer;
  }
`;

const connector = connect((state: RootState) => ({
  theme: state.Theme
}), {});

export default connector(Button);