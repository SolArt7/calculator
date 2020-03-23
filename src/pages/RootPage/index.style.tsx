import React from 'react';
import styled from 'styled-components';

export default styled((props) => (
  <div className={props.className}>
    {props.children}
  </div>
))`
  * {
    font-family: ${props => props.theme.global.fonts.main};
  }
`;