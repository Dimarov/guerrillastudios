import React from "react";
import styled from "styled-components";

import test from "../images/test.jpg"

const StyledBackground = styled.div`
	width: 100%;
	height: 48rem;
	background: #191919;
	box-shadow: 0 -0.25rem .5rem rgba(0,0,0,.16);

	@media (min-width: 80.0rem) {
		height: 64rem;
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
	justify-content: space-evenly;
	align-items: center;
`

const StyledCase = styled.div`
	width: 100%;
	height: 14rem;

	@media (min-width: 40.0rem) {
		height: 24rem;
	}

	@media (min-width: 80.0rem) {
		height: 42rem;
	}
`
const StyledCaseBorder = styled.div`
	width: 100%;
	height: auto;
	box-sizing: border-box;
	padding: 4rem;
	border: .125rem solid rgba(255,255,255,.16);
	position: relative;

	@media screen and (max-width: 60rem) {
		padding: 0rem;
		height: 10rem;
		border: none;
	}
`
const StyledCaseTitle = styled.h2`
	position: absolute;
	top: -4rem;
	left: 0rem;
	font-size: 2rem;
	margin: 0;
	padding: 0rem;
	background: #191919;
	font-family: ff-tisa-web-pro, serif;
	font-weight: 400;
	color: #fff;

	@media (min-width: 80.0rem) {
		top: -2rem;
		left: 4rem;
		padding: 0 1rem;
	}
`

const StyledCaseContent = styled.div`
	height: auto;
	width: 100%;
	position: relative;
`

const StyledPseudoCaseContent = styled.div`
	height: 14rem;
	width: 100%;
	position: relative;
	background: #262626;
	box-shadow: 0 .5rem 1rem rgba(0,0,0,.32);
	top: 0; right: 0; bottom: 0; left: 0;
	transition: all .5s ease-in-out;
	transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1);
	-webkit-transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1);

	@media screen and (min-width: 40.0rem) {
		height: 24rem;
	}

	@media (min-width: 80.0rem) {
		height: 36rem;
	}
`

const StyledPseudoCaseContentVideo = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	pointer-events: none;
	background-image: url(${test});
	background-size: cover;
	background-position: center top;

	@media (min-width: 80.0rem) {
		animation: mymove 20s infinite;

		@keyframes mymove {
		  0% {background-position: center top;}
		  50% {background-position: center bottom;}
			100% {background-position: center top;}
		}
	}
`

const StyledPseudoBlockOne = styled.div`
	height: 50%;
	width: 50%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 90;
	display: none;

	:hover ~ div {
		transform: matrix3d(1,0,0.00,-0.00002,0.00,1,0.00,-0.00002,0,0,1,0,0,0,0,1);
		-webkit-transform: matrix3d(1,0,0.00,-0.00002,0.00,1,0.00,-0.00002,0,0,1,0,0,0,0,1);
	}

	@media (min-width: 80.0rem) {
		display: block;
	}
`

const StyledPseudoBlockTwo = styled.div`
	height: 50%;
	width: 50%;
	position: absolute;
	left: 50%;
	top: 0;
	z-index: 90;
	display: none;

	:hover ~ div {
		transform: matrix3d(1,0,0.00,0.00002,0.00,1,0.00,-0.00002,0,0,1,0,0,0,0,1);
		-webkit-transform: matrix3d(1,0,0.00,0.00002,0.00,1,0.00,-0.00002,0,0,1,0,0,0,0,1);
	}

	@media (min-width: 80.0rem) {
		display: block;
	}
`

const StyledPseudoBlockThree = styled.div`
	height: 50%;
	width: 50%;
	position: absolute;
	left: 0;
	top: 50%;
	z-index: 90;
	display: none;

	:hover ~ div {
		transform: matrix3d(1,0,0.00,-0.00002,0.00,1,0.00,0.00002,0,0,1,0,0,0,0,1);
		-webkit-transform: matrix3d(1,0,0.00,-0.00002,0.00,1,0.00,0.00002,0,0,1,0,0,0,0,1);
	}

	@media (min-width: 80.0rem) {
		display: block;
	}
`

const StyledPseudoBlockFour = styled.div`
	height: 50%;
	width: 50%;
	position: absolute;
	left: 50%;
	top: 50%;
	z-index: 90;
	display: none;

	:hover ~ div {
		transform: matrix3d(1,0,0.00,0.00002,0.00,1,0.00,0.00002,0,0,1,0,0,0,0,1);
		-webkit-transform: matrix3d(1,0,0.00,0.00002,0.00,1,0.00,0.00002,0,0,1,0,0,0,0,1);
	}

	@media (min-width: 80.0rem) {
		display: block;
	}
`

const StyledWebLink = styled.a`
	position: absolute;
	font-size: 1.5rem;
	bottom: -3rem;
	right: 0;
	font-family: futura-pt, sans-serif;
	font-weight: 400;
	text-decoration: none;
	color: #fff;
	cursor: pointer;
	z-index: 99;

	@media (min-width: 80.0rem) {
		color: #000;
		font-size: 1.5rem;
		bottom: 2rem;
		right: 4rem;
	}

	@media (min-width: 80.0rem) {
		:after {
			content: "";
			position: absolute;
			bottom: -.25rem;
			width: 0px;
			height: .125rem;
			margin: .125rem 0 0;
			transition: all .3s ease-in;
			opacity: 0;
			left: 0;
			background: #000;
		}

		:hover:after {
			width: 100%;
			opacity: 1;
		}
	}
`

const StyledInstaLink = styled.a`
	position: absolute;
	font-size: 1.5rem;
	bottom: -3rem;
	right: 6rem;
	font-family: futura-pt, sans-serif;
	font-weight: 400;
	text-decoration: none;
	color: #fff;
	cursor: pointer;
	z-index: 99;

	@media (min-width: 80.0rem) {
		color: #000;
		font-size: 1.5rem;
		bottom: 2rem;
		right: 12rem;
	}

	@media (min-width: 80.0rem) {
		:after {
			content: "";
			position: absolute;
			bottom: -.25rem;
			width: 0px;
			height: .125rem;
			margin: .125rem 0 0;
			transition: all .3s ease-in;
			opacity: 0;
			left: 0;
			background: #000;
		}

		:hover:after {
			width: 100%;
			opacity: 1;
		}
	}
`

const StyledCaseDescription = styled.p`
	font-size: 1.5rem;
	color: #fff;
	font-family: futura-pt, sans-serif;
	font-weight: 400;
`

const CaseContent = () => {
	return (
		<StyledCaseContent>
			<StyledPseudoBlockOne />
			<StyledPseudoBlockTwo />
			<StyledPseudoBlockThree />
			<StyledPseudoBlockFour />
			<StyledPseudoCaseContent>
				<StyledPseudoCaseContentVideo>

				</StyledPseudoCaseContentVideo>
			</StyledPseudoCaseContent>
			<StyledWebLink href="https://kor1k.github.io/job_new_coffee_guirrella/">Website</StyledWebLink>
			<StyledInstaLink href="https://www.instagram.com/comeandmeow/">Instagram</StyledInstaLink>
		</StyledCaseContent>
	);
}

const Work = () => (
	<StyledBackground>
		<StyledBackgroundContainer>
			<StyledContent>
				<StyledCase>
					<StyledCaseBorder>
						<StyledCaseTitle>Come and Meow</StyledCaseTitle>
						<CaseContent />
					</StyledCaseBorder>
				</StyledCase>
				<StyledCaseDescription>
					Come and Meow<br />
					Best coffee and food in a refined but relaxed setting.<br/>
				</StyledCaseDescription>
			</StyledContent>
		</StyledBackgroundContainer>
	</StyledBackground>
);

export default Work;
