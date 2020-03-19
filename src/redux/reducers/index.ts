import {combineReducers} from 'redux';
import Theme from './theme';
import {Theme as ITheme} from '../../const/theme';

export interface RootState {
  Theme: ITheme
}

const reducers = combineReducers({
  Theme
});

export default reducers;