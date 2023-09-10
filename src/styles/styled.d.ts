import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string,
      secondaryColor: string,
      white: string,
      gray100: string,
      gray200: string,
      gray300: string,
      gray400: string,
      gray600: string,
      gray700: string,
      gray800: string,
      gray900: string,
      green300: string,
      green500: string,
      red500: string,
    }
  }
}
