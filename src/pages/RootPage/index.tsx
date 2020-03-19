import MoneySavings from '../MoneySavings';
import StyledInitPage from './index.style';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../redux/reducers';

interface Props extends ConnectedProps<typeof connector> {}

const RootPage = (props: Props) => {
  return (
    <StyledInitPage theme={props.theme}>
      <MoneySavings />
    </StyledInitPage>
  )
};

const connector = connect((state: RootState) => ({
  theme: state.Theme
}), {});

export default connector(RootPage);