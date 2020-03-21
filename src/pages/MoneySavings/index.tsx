import React from 'react';
import StyledMoneySavings from './index.style';
import Toggler from '../../components/Toggler';
import NumInput from '../../components/Input/NumInput';
import DateSwitcher from '../../components/DateSwitcher';
import Label from '../../components/Label';
import {calculateMonthly, calculateTotal} from '../../helpers/savings';

type Modes = 'total' | 'monthly'

const titles: {[key: string]: {[key in Modes]: string}} = {
  amount: {
    total: 'Calculate by total amount',
    monthly: 'Calculate by monthly saving'
  },
  date: {
    total: 'Reach goal by',
    monthly: 'Save until '
  },
  title: {
    total: 'Monthly amount',
    monthly: 'Total amount'
  }
};

class MoneySavings extends React.Component {
  state: {mode: Modes, amount: number, date: Date, total: number} = {
    mode: 'monthly',
    amount: 25000,
    date: new Date(),
    total: 0
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      total: this.calcSStrategy[this.state.mode](this.state.amount, this.state.date)
    })
  }

  render() {
    return (
      <StyledMoneySavings>
        <div className='container-item'>
          <div className='title'>
            <p>Savings</p>
            <p>calculator</p>
          </div>
        </div>
        <div className='container-item'>
          <Toggler
            handleChange={this.handleTogglerChange}
            label={titles.amount[this.state.mode]}
          />
        </div>
        <div className='container-item'>
          <NumInput
            label={titles.title[this.state.mode]}
            startAdornment={{content: '$'}}
            value={this.state.amount}
            handleNumChange={this.handleNumInputChange}
          />
        </div>
        <div className='container-item'>
          <DateSwitcher
            label={titles.date[this.state.mode]}
            value={this.state.date.toISOString()}
            handleChange={this.handleDateChange}
          />
        </div>
        <div className='container-item'>
          <div className='block'>
            <div className='block-inner custom'>
              <Label>{titles.title[this.state.mode]}</Label>
              <h1>${this.state.total}</h1>
            </div>
            <div className='block-inner colored'>
              <Label>You are planning  26 monthly deposits to reach your $25, 000 goal by April 2022.</Label>
            </div>
          </div>
        </div>
      </StyledMoneySavings>
    )
  }

  private calcSStrategy = {
    monthly: calculateMonthly,
    total: calculateTotal
  };

  private handleDateChange = (date: Date) => {
    this.setState({
      ...this.state,
      date,
      total: this.calcSStrategy[this.state.mode](this.state.amount, date)
    })
  };

  private handleNumInputChange = (val: number) => {
    this.setState({
      ...this.state,
      amount: val,
      total: this.calcSStrategy[this.state.mode](val, this.state.date)
    })
  };

  private handleTogglerChange = (state: boolean) => {
    this.setState({
      ...this.state,
      mode: state ? 'total' : 'monthly',
      total: this.calcSStrategy[this.state.mode](this.state.amount, this.state.date)
    })
  };
}

export default MoneySavings;
