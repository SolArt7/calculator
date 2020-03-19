import React from 'react';
import styled from 'styled-components';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from "../../redux/reducers";

interface Props extends ConnectedProps<typeof connector> {}

const connector = connect((state: RootState) => ({
  theme: state.Theme
}), {});

export default connector(styled((props) => (
  <div className={props.className}>
    <div className='container'>
      {props.children}
    </div>
  </div>
))`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.global.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  
  .container {
     background: ${props => props.theme.block.colors.bg};
     box-shadow: ${props => props.theme.block.shadows.main};
     border-radius: ${props => props.theme.block.radiuses.main};
     width: 400px;
     max-width: 50%;
     min-width: 320px;
     padding: 45px;
  }
  
  .title {
    font-size: 30px;
    line-height: 37px;
  }
  
  .components {
    padding-top: 20px;
  }
`)