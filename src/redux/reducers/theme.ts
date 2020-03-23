import {defaultTheme} from '../../const/theme';

interface Action {
  type: string
  payload?: any
  error?: any
}

export default (state = defaultTheme, action: Action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      };

    default:
      return state
  }
}