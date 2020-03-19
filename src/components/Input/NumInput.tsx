import React from 'react'
import Input, {Props as InputProps} from './index';
import {clearNumberWithCommas, numberWithCommas, numberRegexp} from '../../helpers/number'

interface Props extends InputProps {}

class NumInput extends React.Component<Props> {
  state = {
    val: 25000
  };

  render() {
    return (
      <Input
        {...this.props}
        handleChange={this.handleChange}
        value={numberWithCommas(this.state.val)}
      />
    )
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = clearNumberWithCommas(e.target.value);
    if (numberRegexp.test(val)) {
      this.setState({
        val
      });
      this.props.handleChange && this.props.handleChange(e)
    }
  };
}

export default NumInput;