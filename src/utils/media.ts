import { css } from 'styled-components';

export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

type Size = keyof typeof sizes;

// Iterate through the sizes and create a media template
const media: { [key in Size]?: any} = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc
}, {});

export default media;
