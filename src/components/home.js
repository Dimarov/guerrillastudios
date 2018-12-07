import React from "react";
import styled from "styled-components";

import one from "../images/logo-part-one.png"
import two from "../images/logo-part-two.png"
import three from "../images/logo-part-three.png"

const StyledBackground = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	padding-top: 4rem;
	background: linear-gradient(#1A1A1A, #121212);
	z-index: 1;
`;

const StyledBackgroundContainer = styled.div`
	width: 90%;
	max-width: 90rem;
	height: 100%;
	margin: 0 auto;
`;

const StyledContent = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
	justify-content: space-between;
	align-content: center;

	@media screen and (max-width: 60rem) {
		grid-template-columns: 100%;
		grid-template-rows: 18rem 6rem;
	}
`

const StyledSlogan = styled.div`
	width: 54rem;
	box-sizing: border-box;
	height: 19rem;
	padding: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	${'' /* background: #cc6666; */}

	@media screen and (max-width: 60rem) {
		width: 100%;

	}
`;

const StyledSloganText = styled.h2`
	font-family: futura-pt, sans-serif;
	font-weight: 700;
	font-size: 5rem;
	color: #cc6666;

	@media screen and (max-width: 60rem) {
		font-size: 2.5rem;
	}
`;

const StyledSubSlogan = styled.div`
	width: 48rem;
	height: 12rem;
	box-sizing: border-box;
	padding: 3rem;
	grid-row-start: 2;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 60rem) {
		width: 100%;
	}
`;

const StyledSubSloganText = styled.h3`
	font-family: ff-tisa-web-pro, serif;
	font-weight: 400;
	font-size: 2rem;
	color: #fff;

	@media screen and (max-width: 60rem) {
		font-size: 1.5rem;
	}
`;

const StyledAnimatedLogo = styled.div`
	height: 32rem;
	position: relative;
	cursor: pointer;
	transition: all .3s ease-in-out;

	img:first-child {
		transform: translateY(4rem);
	}

	img:last-child {
		transform: translateY(14rem);
	}

	:hover img:first-child {
		transform: translateY(0rem);
	}

	:hover img:last-child {
		transform: translateY(18rem);
	}
`

const StyledAnimatedLogoPart = styled.img`
	width: 20rem;
	position: absolute;
	transform: translateY(10rem);
	transition: all .3s ease-in-out;
`

const Home = () => (
	<StyledBackground>
		<StyledBackgroundContainer>
			<StyledContent>
				<div>
					<StyledSlogan>
						<StyledSloganText>
							Modern way to style your business.
						</StyledSloganText>
					</StyledSlogan>
					<StyledSubSlogan>
						<StyledSubSloganText>
							Take your product to the next level with Guerrilla Studios
						</StyledSubSloganText>
					</StyledSubSlogan>
				</div>
				<StyledAnimatedLogo>
					<StyledAnimatedLogoPart src={one} />
					<StyledAnimatedLogoPart src={two} />
					<StyledAnimatedLogoPart src={three} />
				</StyledAnimatedLogo>
			</StyledContent>
		</StyledBackgroundContainer>
	</StyledBackground>
);

export default Home;
