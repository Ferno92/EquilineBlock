import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export enum Colors {
  Black = '#0D0D0D',
  Black10 = '#E6E6E6',
  Black30 = '#B6B6B6',
  Black50 = '#858585',
  Black75 = '#494949',
  SilverGrey = '#CCCCCC',
  SilverGrey50 = '#ECECEC',
  DirtyWhite = '#F3F3F3',
  BrightWhite = '#FFFFFF',
  Cherry = '#D6001A',
  Fern = '#55B454',
  SunYellow = '#FFE01E',
  Transparent = 'transparent',
  DirtyBlack = '#303030',
  WaGreen = '#25D366',
  WaGreenLight = 'rgb(51, 191, 175)',
  WaGreenDark = 'rgb(0, 122, 109)',
  WaBlue = '#34B7F1',
  WaBlueLight = 'rgb(92, 197, 243)',
  WaBlueDark = 'rgb(36, 128, 168)',
}

export const lightTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'light',
    background: {
      default: Colors.DirtyWhite
    },
    primary: {
      main: Colors.Black
    },
    secondary: {
      main: Colors.WaBlue
    }
  }
}))

export const darkTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: Colors.BrightWhite
    },
    secondary: {
      main: Colors.WaBlue
    }
  }
}))
