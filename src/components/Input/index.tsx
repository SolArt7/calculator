import React from 'react';
import StyledInput from './index.style';
import Label from '../Label';

interface Adornment {
  content: string
  handleClick?: (e: React.ChangeEvent<any>) => void
}

export interface Props {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  startAdornment?: Adornment
  endAdornment?: Adornment
  label?: string
  value?: string | number
  readOnly?: boolean
}

const Input = (props: Props) => {
  const {startAdornment, endAdornment, handleChange, label, value, readOnly} = props;
  return (
    <StyledInput
      startAdornmentClickable={!!(startAdornment && startAdornment.handleClick)}
      endAdornmentClickable={!!(endAdornment && endAdornment.handleClick)}
    >
      {label && <Label className='label'>{label}</Label>}
      <div className='input-container'>
        {
          startAdornment &&
          <div
            className='adornment start'
            onClick={startAdornment.handleClick}
          >{startAdornment.content}</div>
        }
        <input
          type='text'
          className='input'
          onChange={handleChange}
          readOnly={readOnly}
          value={value || ''}
        />
        {
          endAdornment &&
          <div
            className='adornment end'
            onClick={endAdornment.handleClick}
          >{endAdornment.content}</div>
        }
      </div>
    </StyledInput>
  )
};

export default Input;