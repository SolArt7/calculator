import React from 'react';
import styled from 'styled-components';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../redux/reducers';

interface Props extends ConnectedProps<typeof connector> {
}

const connector = connect((state: RootState) => ({
  theme: state.Theme
}), {});

export default connector(styled((props) => (
  <div className={props.className}>
    {props.children}
  </div>
))`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.global.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  
  .header {
    .back-btn {
      padding: 20px;
      
      &-container {
        flex-grow: 0.8;
      }
    }
    &-title {
      flex-grow: 1;
    }
  }
   
  .container {
     background: ${props => props.theme.block.colors.bg};
  }
  
  .title {
    font-size: 30px;
    line-height: 37px;
  }
  
  .block {
    display: flex;
    flex-direction: column;
    border: 1px solid ${props => props.theme.element.colors.border}; 
    border-radius: ${props => props.theme.block.radiuses.main};
    
    &-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 10px 25px;
      
      &.custom {
        min-height: 100px;
      }
      &.colored {
         background: ${props => props.theme.global.colors.bg};
      }
    }
  }
`)
