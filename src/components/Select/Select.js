import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
	position: relative;
	width: max-content;
`

const NativeSelect = styled.select`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	opacity: 0;
	appearance: none;
`

const PresentationalSelect = styled.div`
	background-color: ${COLORS.transparentGray15};
	color: ${COLORS.gray700};
	font-size: ${16 / 16}rem;
	padding: 12px 16px;
	padding-right: 52px;
	border-radius: 8px;

	${NativeSelect}:focus + & {
		outline: 1px dotted #212121;
		outline: 5px auto -webkit-focus-ring-color;
	}

	${NativeSelect}:hover + & {
		color: ${COLORS.black};
	}
`

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 10px;
	margin: auto;
	width: var(--size);
	height: var(--size);
	pointer-events: none;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const size = 24;

  return (
	<Wrapper>
		<NativeSelect value={value} onChange={onChange}>
		{children}
		</NativeSelect>
		<PresentationalSelect>
			<span>{displayedValue}</span>
			<IconWrapper style={{ '--size': size + 'px' }}>
				<Icon id='chevron-down' size={size} strokeWidth={1} style={{display: 'inline-block'}}/>
			</IconWrapper>
		</PresentationalSelect>
	</Wrapper>
  );
};

export default Select;
