import React from 'react';
import StyledLabel from './index.style';

interface Props {
  children?: JSX.Element | string
  className?: string
}

const Label = (props: Props) => {
  return (
    <StyledLabel {...props}>
      {props.children}
    </StyledLabel>
  )
};

export default Label;