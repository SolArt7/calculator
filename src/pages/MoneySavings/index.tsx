import React from 'react';
import moment from 'moment';
import StyledMoneySavings from './index.style';
import Toggler from '../../components/Toggler';
import NumInput from '../../components/Input/NumInput';
import DateSwitcher from '../../components/DateSwitcher';
import Block from '../../components/Block';
import {calculateMonthly, calculateTotal} from '../../helpers/savings';
import Total from "./Total";

export type Modes = 'total' | 'monthly'

export const titles: {[key: string]: {[key in Modes]: string}} = {
  amount: {
    total: 'Calculate by total amount',
    monthly: 'Calculate by monthly saving'
  },
  date: {
    total: 'Reach goal by',
    monthly: 'Save until '
  },
  title: {
    total: 'Total amount',
    monthly: 'Monthly amount'
  },
  total: {
    total: 'Monthly amount',
    monthly: 'Total amount'
  }
};

export interface MoneySavingsState {
  mode: Modes,
  amount: number,
  date: Date,
  total: number
}

class MoneySavings extends React.Component {
  state: MoneySavingsState = {
    mode: 'monthly',
    amount: 25000,
    date: moment().add(1, 'M').toDate(),
    total: 0
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      total: this.calcStrategy[this.state.mode](this.state.amount, this.state.date)
    })
  }

  render() {
    return (
      <StyledMoneySavings>
        <Block p='0 0 20px 0'>
          <div className='title'>
            <p>Savings</p>
            <p>calculator</p>
          </div>
        </Block>
        <Block p='0 0 20px 0'>
          <Toggler
            handleChange={this.handleTogglerChange}
            label={titles.amount[this.state.mode]}
          />
        </Block>
        <Block p='0 0 20px 0'>
          <NumInput
            label={titles.title[this.state.mode]}
            startAdornment={{content: '$'}}
            value={this.state.amount}
            handleNumChange={this.handleNumInputChange}
          />
        </Block>
        <Block p='0 0 20px 0'>
          <DateSwitcher
            label={titles.date[this.state.mode]}
            value={this.state.date.toISOString()}
            handleChange={this.handleDateChange}
            dateBorder={moment().add(1, 'M').toDate()}
          />
        </Block>

        <Total {...this.state} />

      </StyledMoneySavings>
    )
  }

  private calcStrategy = {
    monthly: calculateMonthly,
    total: calculateTotal
  };

  private handleDateChange = (date: Date) => {
    this.setState({
      ...this.state,
      date,
      total: this.calcStrategy[this.state.mode](this.state.amount, date)
    })
  };

  private handleNumInputChange = (val: number) => {
    this.setState({
      ...this.state,
      amount: val,
      total: this.calcStrategy[this.state.mode](val, this.state.date)
    })
  };

  private handleTogglerChange = (state: boolean) => {
    const mode = state ? 'total' : 'monthly';
    this.setState({
      ...this.state,
      mode: mode,
      total: this.calcStrategy[mode](this.state.amount, this.state.date)
    })
  };
}

export default MoneySavings;
