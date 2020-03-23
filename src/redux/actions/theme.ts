import {Theme} from '../../const/theme';

export const SET_THEME = 'SET_THEME';

export const setTheme = (theme: Theme) => {
  return {
    type: SET_THEME,
    payload: theme
  }
};