import React from 'react';
import styled, {css} from 'styled-components';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../redux/reducers';

interface Props extends ConnectedProps<typeof connector> {
  togglerState: boolean,
  className?: string
  children?: React.ReactNode | React.ReactNodeArray
}

const connector = connect((state: RootState) => ({
  theme: state.Theme
}), {});

export default connector(styled((props: Props) => (
  <div className={props.className}>
    {props.children}
  </div>
))`
  display: flex;
  align-items: center;
  
  .tick-container {
    width: 38px;
    height: 18px;
    border: 1px solid ${props => props.theme.element.colors.border};
    border-radius: 9px;
    position: relative;
    &:hover {
      cursor: pointer;
    }
  }
   
  .tick {
    width: 14px;
    height: 14px;
    background: ${props => props.togglerState 
      ? props.theme.element.colors.bg.active
      : props.theme.element.colors.bg.disabled
    };
    border-radius: 16px;
    position: absolute;
    left: 2px;
    top: 1px;
    transition: .07s;
    ${props => props.togglerState && css`
      left: 21px;
      top: 1px;
    `}
  }
  
  .label {
    padding-left: 7px;
  }
`)
