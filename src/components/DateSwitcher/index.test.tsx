import React from 'react';
import moment from 'moment';
import {mount, shallow} from 'enzyme';
import {DateSwitcher} from './index';
import {Provider} from 'react-redux';
import store from '../../redux';

describe('DateSwitcher testing', () => {
  test('Should render without crashing', () => {
    shallow(<DateSwitcher value={''} handleChange={() => {}} />)
  });

  test('Input should be disabled', () => {
    const container = mount(
      <Provider store={store}>
        <DateSwitcher value={''} handleChange={() => {}} />
      </Provider>
    );
    const input = container.find('.input');
    expect(input.prop('readOnly')).toBeTruthy();
  });

  test('Month value should go up on one', () => {
    let val = moment().add(1, 'M');

    const handler = (date: Date) => {
      val = moment(date);
    };

    const container = mount(
      <Provider store={store}>
        <DateSwitcher value={val.toDate().toISOString()} handleChange={handler} />
      </Provider>
    );
    const input = container.find('.input');

    expect(input.prop('value')).toEqual(val.format('MMMM, YYYY'));

    const nextBtn = container.find('.adornment.end');
    nextBtn.simulate('click');

    expect(
      val.format('MMMM, YYYY')
    ).toEqual(moment().add(2, 'M').format('MMMM, YYYY'));

  });

  test('Month value should go down on one', () => {
    let val = moment().add(2, 'M');

    const handler = (date: Date) => {
      val = moment(date);
    };

    const container = mount(
      <Provider store={store}>
        <DateSwitcher value={val.toDate().toISOString()} handleChange={handler} />
      </Provider>
    );
    const input = container.find('.input');

    expect(input.prop('value')).toEqual(val.format('MMMM, YYYY'));

    const nextBtn = container.find('.adornment.start');
    nextBtn.simulate('click');

    expect(
      val.format('MMMM, YYYY')
    ).toEqual(moment().add(1, 'M').format('MMMM, YYYY'));

  });

  test('Current and prev months should not be selected', () => {
    let val = moment().add(1, 'M');

    const handler = (date: Date) => {
      val = moment(date);
    };

    const container = mount(
      <Provider store={store}>
        <DateSwitcher
          value={val.toDate().toISOString()}
          handleChange={handler}
          dateBorder={moment().add(1, 'M').toDate()}
        />
      </Provider>
    );
    const input = container.find('.input');

    expect(input.prop('value')).toEqual(val.format('MMMM, YYYY'));

    const nextBtn = container.find('.adornment.start');
    nextBtn.simulate('click');

    expect(
      val.format('MMMM, YYYY')
    ).toEqual(moment().add(1, 'M').format('MMMM, YYYY'));

  });
});