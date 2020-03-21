import React from 'react';
import styled from 'styled-components';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../redux/reducers';

interface Props extends ConnectedProps<typeof connector> {
  startAdornmentClickable: boolean
  endAdornmentClickable: boolean
}

const connector = connect((state: RootState) => ({
  theme: state.Theme
}), {});

export default connector(styled((props) => (
  <div className={props.className}>{props.children}</div>
))`
  width: 100%;
  
  .input-container {
    display: flex;
    width: 100%;
    align-items: stretch;
    justify-content: stretch;
    min-height: 42px;
    border: 1px solid ${props => props.theme.element.colors.border};
    border-radius: 4px;
    overflow: hidden;
  }
  
  .label {
    padding-bottom: 3px;
  }
  
  .input {
    flex-grow: 1;
    border: 0;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    outline: none;
    font-family: ${props => props.theme.global.fonts.main};
  }
  
  .adornment {
    width: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.global.colors.bg};
    &.start {
      cursor: ${props => props.startAdornmentClickable ? 'pointer': 'default'};
      user-select: none;
    }
    &.end {
      cursor: ${props => props.endAdornmentClickable ? 'pointer': 'default'};
      user-select: none;
    }
  }
`)