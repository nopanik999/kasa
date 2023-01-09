import { keyframes } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const deviceWidths = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const breakpoints = {
  mobileS: `(min-width: ${deviceWidths.mobileS})`,
  mobileM: `(min-width: ${deviceWidths.mobileM})`,
  mobileL: `(min-width: ${deviceWidths.mobileL})`,
  tablet: `(min-width: ${deviceWidths.tablet})`,
  laptop: `(min-width: ${deviceWidths.laptop})`,
  laptopL: `(min-width: ${deviceWidths.laptopL})`,
  desktop: `(min-width: ${deviceWidths.desktop})`,
  desktopL: `(min-width: ${deviceWidths.desktop})`,
};

export const sizes = {
  fontSize: {
    xxSmall: '10px',
    extraSmall: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xLarge: '20px',
    xxLarge: '24px',
    xxxLarge: '28px',
    xxxxLarge: '38px',
    xxxxxLarge: '50px',
  },
  fontWeight: {
    thin: 400,
    normal: 500,
    bold: 700,
  },
  lineHeight: {
    extraSmall: '14px',
    small: '18px',
    large: '22px',
    xxlarge: '34px',
    xxxxLarge: '38px',
  },
  icon: {
    xxlarge: '56px',
    large: '25px',
    medium: '20px',
    small: '15px',
    extraSmall: '12px',
  },
  radius: {
    small: '3px',
    medium: '5px',
    large: '10px',
    wide: '25px',
    round: '50%',
  },
};

export const boxShadows = {
  level1: '0px 0px 4px 0px rgba(0, 0, 0, 0.16)',
  level2: '2px 4px 8px 1px rgba(164, 164, 164, 0.13)',
};
