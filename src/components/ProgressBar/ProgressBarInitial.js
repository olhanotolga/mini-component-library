/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const HEIGHTS = {
	small: '8px',
	medium: '12px',
	large: '16px',
}

const StyledProgress = styled.progress`
	width: 185px;
	height: ${({size}) => HEIGHTS[size]};
`

const ProgressBar = ({ value, size }) => {
  return (
  <>
	<VisuallyHidden>
		<label htmlFor='progressBar'>Progress: {value}</label>
	</VisuallyHidden>
	<StyledProgress size={size} id='progressBar' value={value} max={100} >{value} %</StyledProgress>
  </>
  );
};

export default ProgressBar;
