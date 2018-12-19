import React from "react";
import styled from "styled-components";

import one from "../images/logo-part-one.png";
import two from "../images/logo-part-two.png";
import three from "../images/logo-part-three.png";

const StyledBackground = styled.div`
	width: 100%;
	height: 44rem;
	padding-top: 4rem;
	background: linear-gradient(#1A1A1A, #121212);

	@media (min-width: 80.0rem) {
		height: 100vh;
	}
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
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@media (min-width: 80.0rem) {
		flex-direction: row;
	}
`

const StyledSloganContainer = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: column;

	@media (min-width: 80.0rem) {
		height: 100%;
	}
`

const StyledSlogan = styled.div`
	width: 100%;
	box-sizing: border-box;
	height: 12rem;
	padding: 3rem;
	display: flex;
	justify-content: center;

	@media (min-width: 80.0rem) {
		width: 100%;
		height: 24rem;
		justify-content: flex-start;
	}
`;

const StyledSloganText = styled.h2`
	font-family: futura-pt, sans-serif;
	font-weight: 700;
	font-size: 2.5rem;
	color: #cc6666;

	@media (min-width: 80.0rem) {
		font-size: 6rem;
	}
`;

const StyledSubSlogan = styled.div`
	width: 100%;
	height: 8rem;
	box-sizing: border-box;
	padding: 3rem;
	display: flex;
	justify-content: center;

	@media (min-width: 80.0rem) {
		width: 100%;
		justify-content: flex-start;
	}
`;

const StyledSubSloganText = styled.h3`
	font-family: ff-tisa-web-pro, serif;
	font-weight: 400;
	font-size: 1.5rem;
	color: #fff;

	@media (min-width: 80.0rem) {
		font-size: 2rem;
	}
`;

const StyledAnimatedLogoContainer = styled.div`
	height: 32rem;
	width: 100%;

	@media (min-width: 80.0rem) {
		width: 50%;
		padding: 4rem 0;
	}
`

const StyledAnimatedLogo = styled.div`
	height: 16rem;
	display: flex;
	justify-content: center;
	position: relative;
	transition: all .3s ease-in-out;

	@media screen and (min-width: 80rem) {
		 cursor: pointer;
	}

	img:first-child {
		transform: translateY(7rem);

		@media screen and (min-width: 80rem) {
			transform: translateY(4rem);
		}
	}

	img:last-child {
		transform: translateY(12rem);

		@media screen and (min-width: 80rem) {
			transform: translateY(14rem);
		}
	}

	@media (min-width: 80.0rem) {
		:hover img:first-child {
			transform: translateY(0rem);
		}

		:hover img:last-child {
			transform: translateY(18rem);
		}
	}


`

const StyledAnimatedLogoPart = styled.img`
	width: 10rem;
	position: absolute;
	transform: translateY(10rem);
	transition: all .3s ease-in-out;

	@media (min-width: 80.0rem) {
		width: 20rem;
	}
`

const StyledArrow = styled.div`
	display: none;

	@media (min-width: 80.0rem) {
		display: block;
		position: relative;
		bottom: 12rem;
		left: 50%;
		height: 3rem;
		width: 3rem;
		transform: rotate(45deg) translate(-50%, 0);
		border-right: .25rem solid #fff;
		border-bottom: .25rem solid #fff;
		border-radius: .125rem;
		animation: arrow 1s infinite ease-in-out;

		@keyframes arrow {
			0% {bottom: 12rem;}
			50% {bottom: 11rem;}
			100% {bottom: 12rem;}
		}
	}
`

const Home = () => (
	<StyledBackground>
		<StyledBackgroundContainer>
			<StyledContent>
				<StyledSloganContainer>
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
				</StyledSloganContainer>
				<StyledAnimatedLogoContainer>
					<StyledAnimatedLogo>
						<StyledAnimatedLogoPart src={one} />
						<StyledAnimatedLogoPart src={two} />
						<StyledAnimatedLogoPart src={three} />
					</StyledAnimatedLogo>
				</StyledAnimatedLogoContainer>
			</StyledContent>
			<StyledArrow />
		</StyledBackgroundContainer>
	</StyledBackground>
);

export default Home;
