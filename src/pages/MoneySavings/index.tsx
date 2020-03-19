import React from 'react';
import moment from 'moment';
import StyledMoneySavings from './index.style';
import Toggler from '../../components/Toggler';
import NumInput from '../../components/Input/NumInput';
import DateSwitcher from '../../components/DateSwitcher';

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

  render() {
    return (
      <StyledMoneySavings>
        <div className='title'>
          <p>Savings</p>
          <p>calculator</p>
        </div>
        <div className='components'>
          <Toggler
            handleChange={this.handleTogglerChange}
            label={titles.amount[this.state.mode]}
          />
          <NumInput
            label={titles.title[this.state.mode]}
            startAdornment={{content: '$'}}
            value={this.state.amount}
            handleChange={this.handleNumInputChange}
          />
          <DateSwitcher
            label={titles.date[this.state.mode]}
            value={this.state.date.toISOString()}
            handleChange={this.handleDateChange}
          />
        </div>
      </StyledMoneySavings>
    )
  }

  private handleDateChange = (date: Date) => {
    this.calculateAmountStrategy[this.state.mode](this.state.amount, date);

    this.setState({
      ...this.state,
      date
    })
  };

  private handleNumInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.calculateAmountStrategy[this.state.mode](e.target.value, this.state.date);

    this.setState({
      ...this.state,
      amount: e.target.value
    })
  };

  private handleTogglerChange = (state: boolean) => {

    this.setState({
      mode: state ? 'total' : 'monthly'
    })
  };

  private calculateMonthly = (amount: string | number, date: Date) => {
    const months = Math.ceil(moment(date).diff(moment(), 'M', true));
    this.setState({
      ...this.state,
      total: (Number(amount) * months).toFixed(2)
    });
    console.log(this.state)
  };
  private calculateTotal = (amount: string | number, date: Date) => {
    const months = Math.ceil(moment(date).diff(moment(), 'M', true));
    this.setState({
      ...this.state,
      total: (Number(amount) / months).toFixed(2)
    });
    console.log(this.state)
  };

  private calculateAmountStrategy = {
    total: this.calculateTotal,
    monthly: this.calculateMonthly
  };
}

export default MoneySavings;