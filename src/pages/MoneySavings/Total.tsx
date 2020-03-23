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
          <Block
            maxW='130px'
            jc='flex-end'
          >
            <Label
              fs='24px'
              lh='29px'
              fw='600'
              colored
            >
              ${renderTotalStrategy[props.mode](props.total)}
            </Label>
          </Block>
        </div>
        <div className='block-inner colored'>
          <Label
            fs='10px'
            lh='14px'

          >
            {
              props.mode === 'total' &&
              <span>
                You are planning <b>{String(getMonthsDiff(props.date))} monthly</b> deposits to reach your
                <b> ${renderTotalStrategy.monthly(props.amount)}</b> goal by
                <b> {moment(props.date).format('MMMM YYYY')}</b>.
              </span>
            }
            {
              props.mode === 'monthly' &&
              <span>
                You are saving <b>${renderTotalStrategy.total(props.amount)}</b> monthly to save
                <b> ${renderTotalStrategy.monthly(props.total)}</b> by
                <b> {moment(props.date).format('MMMM YYYY')}</b>.
              </span>
            }
          </Label>
        </div>
      </Block>
    </Block>
  )
};

const renderTotalStrategy: {[Key in Modes]: (val: number) => string} = {
  monthly: numberWithCommas,
  total: (val: number): string => val.toFixed(2)
};

export default Total;