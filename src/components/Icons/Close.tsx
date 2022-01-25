import React, { FC, memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const Close: FC<Props> = ({ size = 24, color = 'white' }) => (
  <Svg
    aria-hidden="true"
    color={color}
    data-icon="close"
    data-prefix="fas"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.085 6.527a1.293 1.293 0 00-.004-1.834l.226.226a1.296 1.296 0 00-1.834-.004L12 10.39 6.527 4.915a1.293 1.293 0 00-1.834.004l.226-.226a1.296 1.296 0 00-.004 1.834L10.39 12l-5.474 5.473a1.293 1.293 0 00.004 1.834l-.226-.226c.507.508 1.328.51 1.834.004L12 13.61l5.473 5.474a1.293 1.293 0 001.834-.004l-.226.226c.508-.507.51-1.328.004-1.834L13.61 12l5.474-5.473z"
    />
  </Svg>
);

export default memo(Close);
