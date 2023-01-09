const COLORS = {
  white: '#FFFFFF',
  orange: '#FF6060',
  lightGrey: '#F7F7F7',
  black: '#000000',
  /*
  lightGrey: '#F9F9FC',
  grey: '#8186A0',
  darkGrey: '#4F4C6B',
  violet: '#5843E4',
  black: '#2F2E41',
  */
};

export const themeColors = {
  background: COLORS.white,
  text: COLORS.orange,
  link: COLORS.orange,
  block: {
    title: {
      background: COLORS.orange,
      text: COLORS.white,
    },
    background: COLORS.lightGrey,
    text: COLORS.orange,
  },
  slider: {
    text: COLORS.white,
  },
  tag: {
    background: COLORS.orange,
    text: COLORS.white,
  },
  footer: {
    background: COLORS.black,
    text: COLORS.white,
  },
};
