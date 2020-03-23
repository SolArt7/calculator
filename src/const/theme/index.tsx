interface Stateful {
  active: string
  disabled: string
}

interface Parameters {
  main: string
  [key: string]: string
}

interface ThemeEntity {
  colors?: {
    bg?: string | Stateful,
    color?: string
    border?: string
  }
  fonts?: Parameters
  shadows?: Parameters
  radiuses?: Parameters
}

export interface Theme {
  [key: string]: ThemeEntity
}

export const defaultTheme: Theme = {
  global: {
    colors: {
      bg: '#F4F8FA',
      color: '#102C51'
    },
    fonts: {
      main: 'ramblaregular'
    }
  },

  block: {
    colors: {
      bg: '#FFFEFE',
      border: '#CFCFCF',

    },
    shadows: {
      main: '0 0 20px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1)'
    },
    radiuses: {
      main: '6px'
    }
  },

  element: {
    colors: {
      border: '#CFCFCF',
      bg: {
        active: '#2F80ED',
        disabled: '#CFCFCF'
      },
      color: '#F2F2F2'
    }
  },
};