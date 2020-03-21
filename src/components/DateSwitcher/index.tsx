import React from 'react';
import Input from '../Input';
import moment, {Moment} from 'moment';

interface Props {
  handleChange: (val: Date) => void
  value: string
  label?: string,
  dateBorder?: Date
}

class DateSwitcher extends React.Component<Props> {
  render() {
    return (
      <Input
        label={this.props.label}
        startAdornment={{
          content: '<',
          handleClick: this.handleClickBack
        }}
        endAdornment={{
          content: '>',
          handleClick: this.handleClickForward
        }}
        value={this.formatDate(moment(this.props.value))}
        readOnly
      />
    )
  }

  private formatDate = (date: Moment): string => {
    return date.format('MMMM, YYYY')
  };

  private handleClickBack = () => {
    const val = moment(this.props.value);

    // prevent clicking back
    if (val.isAfter(this.props.dateBorder || new Date())) {
      this.props.handleChange(val.subtract(1, 'M').toDate());
    }
  };

  private handleClickForward = () => {
    const val = moment(this.props.value);
    this.props.handleChange(val.add(1, 'M').toDate());
  };
}

export default DateSwitcher;