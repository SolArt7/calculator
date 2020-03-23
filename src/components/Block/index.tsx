import React from 'react';
import styled, {css} from 'styled-components';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../redux/reducers';

interface Props extends ConnectedProps<typeof connector> {
  className?: string
  children?: React.ReactNode | React.ReactNodeArray

  display?: string // (default: flex)

  w?: string // width (100%)
  maxW?: string // max=width (auto)
  minW?: string // max=width (auto)

  h?: string // width (auto)
  maxH?: string // max-height (auto)
  minH?: string // max-height (auto)

  p?: string // padding (0)
  m?: string // margin (0)

  ai?: string // align-items (flex=start)
  jc?: string // justify-content (flex-start)
  fd?: string // flex=direction (row)
  fw?: string // flex-wrap (no-wrap)

  bordered?: boolean // add border with border radius (false)
  shadowed?: boolean // add shadows (false)

  overflow?: string // (auto)

}

const Block = styled((props: Props) => {
  return (
    <div className={props.className}>{props.children}</div>
  )
})`
  overflow: ${props => props.overflow || 'auto'};

  display: ${props => props.display || 'flex'};
  
  align-items: ${props => props.ai || 'flex-start'};
  justify-content: ${props => props.jc || 'flex-start'};
  flex-direction: ${props => props.fd || 'row'};
  flex-wrap: ${props => props.fw || 'no-wrap'};
  
  width: ${props => props.w || '100%'};
  min-width: ${props => props.minW || 'auto'};
  max-width: ${props => props.maxW || 'auto'};
  
  height: ${props => props.h || 'auto'};
  min-height: ${props => props.minH || 'auto'};
  max-height: ${props => props.maxH || 'auto'};
  
  padding: ${props => props.p || 0};
  margin: ${props => props.m || 0};
  
  ${props => props.bordered && css`
    border: 1px solid ${props.theme.block.colors.border};
    border-radius: ${props => props.theme.block.radiuses.main};
    overflow: hidden; 
  `}
  
  ${props => props.shadowed && css`
    box-shadow: ${props.theme.block.shadows.main};
  `}
`;

const connector = connect((state: RootState) => ({
  theme: state.Theme
}), {});

export default connector(Block);