import React from "react";
import styled from "styled-components";

import test from "../images/comemeow.jpg"

const StyledBackground = styled.div`
	width: 100%;
	height: ${props => props.isOpen ? "86rem" : "28rem"};
	background: #191919;
	box-shadow: 0 -0.25rem .5rem rgba(0,0,0,.16);

	@media (min-width: 80.0rem) {
		height: ${props => props.isOpen ? "96rem" : "64rem"};
	}
`;

const StyledBackgroundContainer = styled.div`
	width: 100%;
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
	align-items: center;

	@media (min-width: 80.0rem) {
		justify-content: space-evenly;
	}
`

const StyledCase = styled.div`
	width: 100%;
	height: auto;

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
	padding: 0 1rem;
	border: none;

	@media screen and (min-width: 80rem) {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 4rem;
		border: .125rem solid rgba(255,255,255,.16);
		position: relative;
	}
`
const StyledCaseTitle = styled.h2`
	font-size: 2rem;
	padding: .5rem;
	text-align: center;
	border: .125rem solid #cc6666;
	font-family: ff-tisa-web-pro, serif;
	font-weight: 400;
	color: #cc6666;

	@media (min-width: 80.0rem) {
		position: absolute;
		background: #191919;
		top: -2rem;
		left: 4rem;
		text-align: left;
		padding: 0 1rem;
		color: #fff;
		border: none;
		margin: 0;
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
		animation: mymove 10s infinite;

		@keyframes mymove {
		  0% {background-position: center top;}
		  50% {background-position: center center;}
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
	font-size: 1rem;
	bottom: 1rem;
	right: 1rem;
	font-family: futura-pt, sans-serif;
	font-weight: 600;
	text-decoration: none;
	color: #fff;
	padding: .25rem .75rem;
	border-radius: .125rem;
	box-shadow: 0 .5rem .5rem rgba(0,0,0,0.2);
	background: #cc6666;
	cursor: pointer;
	z-index: 99;

	@media (min-width: 80.0rem) {
		color: #000;
		font-size: 1.5rem;
		bottom: 2rem;
		right: 4rem;
		font-weight: 400;
		background: none;
		box-shadow: none;
		padding: 0;
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
	font-size: 1rem;
	bottom: 1rem;
	right: 7rem;
	font-family: futura-pt, sans-serif;
	font-weight: 600;
	text-decoration: none;
	color: #fff;
	padding: .25rem .75rem;
	border-radius: .125rem;
	box-shadow: 0 .5rem .5rem rgba(0,0,0,0.2);
	background: #cc6666;
	cursor: pointer;
	z-index: 99;

	@media (min-width: 80.0rem) {
		color: #000;
		font-size: 1.5rem;
		bottom: 2rem;
		right: 12rem;
		font-weight: 400;
		background: none;
		box-shadow: none;
		padding: 0;
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
	padding: 0 1rem;
	font-size: 1rem;
	color: #fff;
	font-family: futura-pt, sans-serif;
	font-weight: 300;
	margin: 2rem 0 0 0;
	display: ${props => props.isOpen ? "flex" : "none"};

	@media (min-width: 80.0rem) {
		font-size: 1.5rem;
		margin-top: 0;
	}
`

const StyledAboutButton = styled.button`
	background: none;
	border: none;
	font-family: futura-pt, sans-serif;
	font-weight: 400;
	font-size: 1.25rem;
	margin: 1.5rem 0 0 0;
	text-decoration: none;
	color: #fff;
	padding: 0;
	cursor: pointer;

	@media (min-width: 80.0rem) {
		font-size: 1.5rem;
		position: relative;
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

class Work extends React.Component {
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
			<StyledBackground isOpen={this.state.isOpen}>
				<StyledBackgroundContainer>
					<StyledContent>
						<StyledCase>
							<StyledCaseBorder>
								<StyledCaseTitle>Come and Meow</StyledCaseTitle>
								<CaseContent />
							</StyledCaseBorder>
						</StyledCase>
						<StyledCaseDescription isOpen={this.state.isOpen} key={this.state.isOpen ? 'open' : 'closed'}>
							Кофе — самый маржинальный продукт в сегменте HoReCa. <br />
							За последние 5 лет спрос на кофе в Украине возрос на 23%. По данным Craft Foods Ukraine, в 2018 году в Украине выпили 75 тыс. тонн кофе. Востребованность формата «кофе с собой» обусловлена быстрым образом жизни, запрете курения в помещении и массой других причин. В общем, сегмент ещё ого-го, именно поэтому мы приняли решения упаковать кофейню. <br />
							<br />
							При разработке бренда «come&meow», мы специально отказались от почти всех визуальных кофейных маркеров. Не использовали стандартную кофейную цветовую гамму, что позволило бренду сильно выделиться на фоне массы конкурентов. Дизайн вызывает ассоциации с нежностью, теплом и природой. <br />
							<br />
							По данным исследования «БелБизнесКонсалтинг», самая насыщенная возрастная категория любителей кофе-баров и кофеен — 40-55 лет. И подавляющее большинство— женщин. Исходя из этого мы постарались сделать так, чтобы образ был для них интересным, вызывал приятные ассоциации, желание вернутся, сделать фото на фоне постеров или селфи со стаканчиком. Кстати о них, стаканчики — это очень важный рекламный носитель. Гости уносят покупку, таким образом являя вас общественности, поэтому мы уделили им особое внимание и указали на них адрес и ссылки на сайт и соцсети. <br />
							<br />
							В итоге, из-за присутствующего разнообразия в рынке кофейных заведений дизайн требует решительных и ярких решений, чтобы качественно выделиться на фоне остальных и способствовать дальнейшему продвижению.
						</StyledCaseDescription>
						<StyledAboutButton onClick={this.handleClick} >{this.state.isOpen ? "Close" : "Learn More"}</StyledAboutButton>
					</StyledContent>
				</StyledBackgroundContainer>
			</StyledBackground>
		);
	}
}

export default Work;
