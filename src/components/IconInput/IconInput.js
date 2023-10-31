import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
	small: {
		height: 24,
		fontSize: 14,
		iconSize: 16,
		borderThickness: 1,
	},
	large: {
		height: 36,
		fontSize: 18,
		iconSize: 24,
		borderThickness: 1,
	}
}

const InputWrapper = styled.label`
	display: block;
	position: relative;
	color: ${COLORS.gray700};

	&:hover {
		color: ${COLORS.black};
	}
`;
const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
	height: var(--size);
`;
const TextInput = styled.input`
	height: var(--height);
	width: var(--width);
	font-size: var(--font-size);
	border: none;
	border-bottom: var(--border-thickness) solid ${COLORS.black};
	padding-left: var(--height);
	color: inherit;
	font-weight: 700;
	outline-offset: 2px;

	&::placeholder {
		font-weight: 400;
		color: ${COLORS.gray500};
	}
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

	const styles = STYLES[size];

if (!size) {
	throw new Error('No size value specified');
}

  return (
	<InputWrapper>
		<VisuallyHidden>{label}</VisuallyHidden>
		<IconWrapper style={{'--size': styles.iconSize + 'px'}}>
			<Icon id={icon} size={styles.iconSize}/>
		</IconWrapper>
		<TextInput placeholder={placeholder || 'Search...'} style={{
			'--width': width + 'px',
			'--height': styles.height + 'px',
			'--font-size': styles.fontSize / 16 + 'rem',
			'--border-thickness': styles.borderThickness + 'px'}}/>
	</InputWrapper>
  );
};

export default IconInput;
