import React from "react";
import styled from "styled-components";

import { CSSTransitionGroup } from 'react-transition-group';

import yaroslav from "../images/people/yaroslav.png"
import tonya from "../images/people/tonya.png"
import vitaliy from "../images/people/vitaliy.png"
import kostya from "../images/people/kostya.png"
import dima from "../images/people/dima.png"

const StyledBackground = styled.div`
	width: 100%;
	height: auto;
	background: #191919;
	box-shadow: 0 0 1rem rgba(0,0,0,.32);
	z-index: 9;
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
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const StyledAboutText = styled.h2`
	text-align: center;
	font-family: ff-tisa-web-pro, serif;
	font-weight: 600;
	font-size: 1.5rem;
	color: #fff;
	margin: 2rem 0 0 0;

	@media (min-width: 80.0rem) {
		font-size: 3rem;
	}
`

const StyledAboutButton = styled.button`
	background: none;
	border: none;
	font-family: futura-pt, sans-serif;
	font-weight: 400;
	font-size: 1.5rem;
	margin: 2rem 0;
	text-decoration: none;
	color: #fff;
	padding: 0;
	position: relative;
	cursor: pointer;

	@media (min-width: 80.0rem) {
		font-size: 2rem;
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
			background: #fff;
		}

		:hover:after {
			width: 100%;
			opacity: 1;
		}
	}
`

const StyledPhotoContainer = styled.div`
	width: 100%;
	height: auto;
	margin-top: 4rem;
	display: ${props => props.isOpen ? "flex" : "none"};
	justify-content: center;
	flex-wrap: wrap;
`

const StyledPerson = styled.div`
	width: 100%;
	height: 20rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: flex-start;
	cursor: pointer;
	transition: all .1s ease-in;
	transform: scale3d(.95, .95, .95);

	@media (min-width: 40.0rem) {
		width: 50%;
	}

	@media (min-width: 80.0rem) {
		width: calc(100%/3);
		height: 32rem;
	}

	@media (min-width: 80.0rem) {
		:hover {
			transform: scale3d(1, 1, 1);
		}

		:hover img {
			filter: grayscale(0);
		}
	}
`

const StyledPhoto = styled.img`
	height: 12rem;
	transition: all .1s ease-in;

	@media (min-width: 80.0rem) {
		height: 16rem;
		filter: grayscale(1);
	}
`

const StyledName = styled.h2`
	flex: 0 0 100%;
	text-align: center;
	font-family: ff-tisa-web-pro, serif;
	font-weight: 600;
	font-size: 1.5rem;
	color: #fff;
`

const StyledDescription = styled.p`
	flex: 0 0 60%;
	text-align: center;
	font-family: futura-pt, sans-serif;
	font-weight: 500;
	font-size: 1rem;
	color: #cc6666;
	margin: 0;
`

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isOpen: false};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  }

	render() {
		return (
			<StyledBackground>
				<StyledBackgroundContainer>
					<StyledContent>
						<StyledAboutText>Experienced team with complete market knowledge aimed on yours outcome.</StyledAboutText>
						<CSSTransitionGroup
							transitionName="team"
							transitionEnterTimeout={500}
							transitionLeave={false}>
							<StyledPhotoContainer isOpen={this.state.isOpen} key={this.state.isOpen ? 'open' : 'closed'}>
								<StyledPerson>
									<StyledPhoto src={yaroslav} />
									<StyledName>Yaroslav Vitkovskiy</StyledName>
									<StyledDescription>Product Design, Video Production</StyledDescription>
								</StyledPerson>
								<StyledPerson>
									<StyledPhoto src={tonya} />
									<StyledName>Tonya Ruba</StyledName>
									<StyledDescription>Graphic Design, Illustration</StyledDescription>
								</StyledPerson>
								<StyledPerson>
									<StyledPhoto src={kostya} />
									<StyledName>Kostya Yelskiy</StyledName>
									<StyledDescription>Web-Development, UI/UX Design</StyledDescription>
								</StyledPerson>
								<StyledPerson>
									<StyledPhoto src={vitaliy} />
									<StyledName>Vitaliy Siomochkin</StyledName>
									<StyledDescription>Project Managment, Copyright, Social Media</StyledDescription>
								</StyledPerson>
								<StyledPerson>
									<StyledPhoto src={dima} />
									<StyledName>Dmytro Kondakov</StyledName>
									<StyledDescription>Project Managment, UI/UX Design, Web-Development</StyledDescription>
								</StyledPerson>
							</StyledPhotoContainer>
						</CSSTransitionGroup>
						<StyledAboutButton onClick={this.handleClick} >{this.state.isOpen ? "Close" : "Our Team"}</StyledAboutButton>
					</StyledContent>
				</StyledBackgroundContainer>
			</StyledBackground>
		);
	}
}

export default About;
