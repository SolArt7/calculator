import React from 'react';
import Label from '../../components/Label';
import Block from '../../components/Block';
import {numberWithCommas} from '../../helpers/number';
import {getMonthsDiff} from '../../helpers/date';
import {Modes, MoneySavingsState, titles} from './index';
import moment from 'moment';

const Total = (props: MoneySavingsState) => {
  return (
    <Block fd='column'>
      <Block fd='column' bordered>
        <div className='block-inner custom'>
          <Label>{titles.total[props.mode]}</Label>
          <Label
            fs='24px'
            lh='29px'
            fw='600'
            colored
          >
            ${renderTotalStrategy[props.mode](props.total)}
          </Label>
        </div>
        <div className='block-inner colored'>
          <Label
            fs='10px'
            lh='14px'

          >
            {renderSubTotalStrategy[props.mode](props)}
          </Label>
        </div>
      </Block>
    </Block>
  )
};

const subtotal = {
  total: 'You are planning [months] monthly deposits to reach your $[total] goal by [date].',
  monthly: 'You are saving $[amount] monthly to save $[total] by [date].'
};

const renderTotalStrategy: {[Key in Modes]: (val: number) => string} = {
  monthly: numberWithCommas,
  total: (val: number): string => val.toFixed(2)
};

const renderTotal = (props: MoneySavingsState): string => {
  return subtotal.total
    .replace('[months]', String(getMonthsDiff(props.date)))
    .replace('[total]', renderTotalStrategy.monthly(props.total))
    .replace('[date]', moment(props.date).format('MMMM YYYY'))
};

const renderMonthly = (props: MoneySavingsState): string => {
  return subtotal.monthly
    .replace('[amount]', renderTotalStrategy.total(props.amount))
    .replace('[total]', renderTotalStrategy.monthly(props.total))
    .replace('[date]', moment(props.date).format('MMMM YYYY'))
};

const renderSubTotalStrategy = {
  monthly: renderMonthly,
  total: renderTotal
};

export default Total;