import {defaultTheme} from '../../const/theme';

export default (state = defaultTheme, action: any) => {
  switch (action.type) {

    case 'SET_THEME':
      return {
        ...state,
      };

    case 'SWTCH_THEME':
      return state;

    default:
      return state
  }
}