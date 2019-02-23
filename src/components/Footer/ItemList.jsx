import React from 'react';
import styled from 'styled-components';
import Item from './Item';

import github from '../../assets/img/github-sign.svg';
import gmail from '../../assets/img/gmail.svg';
import linkedIn from '../../assets/img/linkedin-sign.svg';

const backgroundColor = 'grey';

const StyledDiv = styled.div`
	background: ${backgroundColor};
	color: white;
	height: auto;
	padding: 20px 0;
`;

const TopBG = styled.div`
	position: relative;
	top: -20px;
  background-image: ;
	background-size: 100% 100%;
	width: 100%;
	height: 200px;

	@media (max-width: 1000px) {
		display: none;
	}
`;

const Container = styled.div`
	padding: 0 20px;
	display: flex;
	@media screen and (min-width: 1000px) {
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		padding: 0;
	}

	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}
`;

const ItemContainer = styled.div`
	@media screen and (min-width: 1000px) {
		margin: 0 auto;
	}
`;

function ItemList() {
	return (
		<StyledDiv>
			<TopBG />
			<Container>
				<ItemContainer>
					<Item
						data="Github"
						link="https://github.com/godfreyzubiaga"
						image={github}
					/>
				</ItemContainer>
				<ItemContainer>
					<Item data="jaredreando@gmail.com" image={gmail} />
				</ItemContainer>
				<ItemContainer>
					<Item
						data="LinkedIn"
						link="https://drive.google.com/file/d/1gRMrWYiH5NyumQZyvgTAN5aa996sVPNt/view?usp=sharing"
						image={linkedIn}
					/>
				</ItemContainer>
			</Container>
		</StyledDiv>
	);
}

export default ItemList;
