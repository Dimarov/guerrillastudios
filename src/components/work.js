import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
	width: 100%;
	height: 120rem;
	background: #191919;
	box-shadow: 0 -0.25rem .5rem rgba(0,0,0,.16);

	@media screen and (max-width: 60rem) {
		height: 54rem;
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
	height: 47rem;

	@media screen and (max-width: 60rem) {
		height: 18rem;
	}
`
const StyledCaseBorder = styled.div`
	width: 100%;
	height: 45rem;
	box-sizing: border-box;
	padding: 4rem;
	border: .125rem solid rgba(255,255,255,.16);
	position: relative;

	@media screen and (max-width: 60rem) {
		padding: 0rem;
		height: 16rem;
	}
`
const StyledCaseTitle = styled.h2`
	position: absolute;
	top: -2rem;
	left: 4rem;
	margin: 0;
	padding: 0 1rem;
	background: #191919;
	font-family: ff-tisa-web-pro, serif;
	font-weight: 400;
	font-size: 2rem;
	color: #fff;

	@media screen and (max-width: 60rem) {
		top: -3rem;
		left: 0rem;
		font-size: 1.5rem;
	}
`

const StyledCaseContent = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
`

const StyledPseudoCaseContent = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	background: #262626;
	box-shadow: 0 .5rem 1rem rgba(0,0,0,.32);
	transition: all .5s ease-in-out;
	transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1);
	-webkit-transform: matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1);
`

const StyledPseudoBlockOne = styled.div`
	height: 50%;
	width: 50%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 90;

	:hover ~ div {
		transform: matrix3d(1,0,0.00,-0.00002,0.00,1,0.00,-0.00002,0,0,1,0,0,0,0,1);
		-webkit-transform: matrix3d(1,0,0.00,-0.00002,0.00,1,0.00,-0.00002,0,0,1,0,0,0,0,1);
	}
`

const StyledPseudoBlockTwo = styled.div`
	height: 50%;
	width: 50%;
	position: absolute;
	left: 50%;
	top: 0;
	z-index: 90;

	:hover ~ div {
		transform: matrix3d(1,0,0.00,0.00002,0.00,1,0.00,-0.00002,0,0,1,0,0,0,0,1);
		-webkit-transform: matrix3d(1,0,0.00,0.00002,0.00,1,0.00,-0.00002,0,0,1,0,0,0,0,1);
	}
`

const StyledPseudoBlockThree = styled.div`
	height: 50%;
	width: 50%;
	position: absolute;
	left: 0;
	top: 50%;
	z-index: 90;

	:hover ~ div {
		transform: matrix3d(1,0,0.00,-0.00002,0.00,1,0.00,0.00002,0,0,1,0,0,0,0,1);
		-webkit-transform: matrix3d(1,0,0.00,-0.00002,0.00,1,0.00,0.00002,0,0,1,0,0,0,0,1);
	}
`

const StyledPseudoBlockFour = styled.div`
	height: 50%;
	width: 50%;
	position: absolute;
	left: 50%;
	top: 50%;
	z-index: 90;

	:hover ~ div {
		transform: matrix3d(1,0,0.00,0.00002,0.00,1,0.00,0.00002,0,0,1,0,0,0,0,1);
		-webkit-transform: matrix3d(1,0,0.00,0.00002,0.00,1,0.00,0.00002,0,0,1,0,0,0,0,1);
	}
`

const StyledViewLink = styled.a`
	position: absolute;
	right: 2rem;
	bottom: 2rem;
	font-family: futura-pt, sans-serif;
	font-weight: 400;
	font-size: 1.5rem;
	text-decoration: none;
	color: #fff;
	cursor: pointer;
	z-index: 99;

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
		background: #fff;
	}

	:hover:after {
		width: 100%;
		opacity: 1;
	}

	@media screen and (max-width: 60rem) {
		font-size: 1rem;
		bottom: 1rem;
		right: 1rem;
	}
`

const CaseContent = () => {
	return (
		<StyledCaseContent>

			<StyledPseudoBlockOne />
			<StyledPseudoBlockTwo />
			<StyledPseudoBlockThree />
			<StyledPseudoBlockFour />
			<StyledPseudoCaseContent>

			</StyledPseudoCaseContent>
			<StyledViewLink>View Website</StyledViewLink>
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
				<StyledCase>
					<StyledCaseBorder>
						<StyledCaseTitle>Unity-Bars</StyledCaseTitle>
						<CaseContent />
					</StyledCaseBorder>
				</StyledCase>
			</StyledContent>
		</StyledBackgroundContainer>
	</StyledBackground>
);

export default Work;
