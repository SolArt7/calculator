import React, {useState} from 'react'
import StyledToggler from './index.style';
import Label from '../Label';

interface Props {
  handleChange?: (state: boolean) => void,
  label?: string
}

const Toggler = (props: Props) => {
  const [togglerState, handleTogglerChange] = useState(false);

  return (
    <StyledToggler
      togglerState={togglerState}
    >
      <div
        className='tick-container'
        onClick={() => {
          const oppositeState = !togglerState;
          handleTogglerChange(oppositeState);
          props.handleChange && props.handleChange(oppositeState);
        }}
      >
        <div className='tick'/>
      </div>
      {
        props.label && <Label className='label'>{props.label}</Label>
      }
    </StyledToggler>
  )
};

export default Toggler;