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
`

const StyledSlogan = styled.div`
	width: 100%;
	box-sizing: border-box;
	height: 12rem;
	padding: 3rem;
	display: flex;
	justify-content: center;
`;

const StyledSloganText = styled.h2`
	font-family: futura-pt, sans-serif;
	font-weight: 700;
	font-size: 2.5rem;
	color: #cc6666;
`;

const StyledSubSlogan = styled.div`
	width: 100%;
	height: 8rem;
	box-sizing: border-box;
	padding: 3rem;
	display: flex;
	justify-content: center;
`;

const StyledSubSloganText = styled.h3`
	font-family: ff-tisa-web-pro, serif;
	font-weight: 400;
	font-size: 1.5rem;
	color: #fff;
`;

const StyledAnimatedLogoContainer = styled.div`
	height: 16rem;
	width: 100%;
`

const StyledAnimatedLogo = styled.div`
	height: 16rem;
	display: flex;
	justify-content: center;
	position: relative;
	cursor: pointer;
	transition: all .3s ease-in-out;

	img:first-child {
		transform: translateY(4rem);

		@media screen and (max-width: 60rem) {
			transform: translateY(7rem);
		}
	}

	img:last-child {
		transform: translateY(14rem);

		@media screen and (max-width: 60rem) {
			transform: translateY(12rem);
		}
	}

	:hover img:first-child {
		transform: translateY(0rem);

		@media screen and (max-width: 60rem) {
			transform: translateY(5rem);
		}
	}

	:hover img:last-child {
		transform: translateY(18rem);

		@media screen and (max-width: 60rem) {
			transform: translateY(14rem);
		}
	}
`

const StyledAnimatedLogoPart = styled.img`
	width: 10rem;
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
				<StyledAnimatedLogoContainer>
					<StyledAnimatedLogo>
						<StyledAnimatedLogoPart src={one} />
						<StyledAnimatedLogoPart src={two} />
						<StyledAnimatedLogoPart src={three} />
					</StyledAnimatedLogo>
				</StyledAnimatedLogoContainer>
			</StyledContent>
		</StyledBackgroundContainer>
	</StyledBackground>
);

export default Home;
