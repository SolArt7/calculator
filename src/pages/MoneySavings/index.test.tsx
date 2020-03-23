import React from 'react';
import {mount, shallow} from 'enzyme';
import MoneySavings from './index';
import store from '../../redux';
import {Provider} from 'react-redux';

describe('MoneySavings component tests', () => {
  test('Renders without crashing', () => {
    mount(
      <Provider store={store}>
        <MoneySavings />
      </Provider>
    )
  });

  test('Test titles', () => {
    const container = mount(
      <Provider store={store}>
        <MoneySavings />
      </Provider>
    );
    expect(container.find('span.sc-AxiKw.gmPiVg.label').at(0).text())
      .toEqual('Calculate by monthly saving');
    expect(container.find('span.sc-AxiKw.gmPiVg.label').at(1).text())
      .toEqual('Monthly amount');
    expect(container.find('span.sc-AxiKw.gmPiVg.label').at(2).text())
      .toEqual('Save until');

    expect(container.find('.block-inner .sc-AxiKw.gmPiVg').at(0).text())
      .toEqual('Total amount');

    container.find('.tick-container').simulate('click');

    expect(container.find('span.sc-AxiKw.gmPiVg.label').at(0).text())
      .toEqual('Calculate by total amount');
    expect(container.find('span.sc-AxiKw.gmPiVg.label').at(1).text())
      .toEqual('Total amount');
    expect(container.find('span.sc-AxiKw.gmPiVg.label').at(2).text())
      .toEqual('Reach goal by');

    expect(container.find('.block-inner .sc-AxiKw.gmPiVg').at(0).text())
      .toEqual('Monthly amount');
  });

  test('Test functionality', () => {
    const container = mount(
      <Provider store={store}>
        <MoneySavings/>
      </Provider>
    );
    container.find('.adornment.end').simulate('click');
    expect(container.find('.sc-AxiKw.DqulK').at(0).text()).toEqual('$50,000');

    container.find('.tick-container').simulate('click');

    expect(container.find('.sc-AxiKw.DqulK').at(0).text()).toEqual('$12500.00');

  });

});