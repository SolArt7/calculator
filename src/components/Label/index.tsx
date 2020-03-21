import React from 'react';
import styled, {css} from 'styled-components'
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../redux/reducers';

interface Props extends ConnectedProps<typeof connector> {
  children?: React.ReactNodeArray | React.ReactNode
  className?: string,
  colored?: boolean
  fw?: string // font-weight (normal)
  fs?: string // font=size (14px)
  lh?: string // line-height (17px)
}

const Label = styled((props: Props) => {
  return (
    <span className={props.className}>
      {props.children}
    </span>
  )
})`
  display: inline-block;
  font-size: ${props => props.fs || '14px'};
  line-height: ${props => props.lh || '17px'};
  font-weight: ${props => props.fw || 'normal'};
  
  ${props => props.colored && css`
    color: ${props.theme.element.colors.bg.active}
  `}
  
`;

const connector = connect((state: RootState) => ({
  theme: state.Theme
}), {});

export default connector(Label);