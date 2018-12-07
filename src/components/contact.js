import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
	width: 100%;
	height: 36rem;
	background: #191919;
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
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 60rem) {
		flex-wrap: wrap;
	}
`

const StyledContactInfoBlock = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;

	@media screen and (max-width: 60rem) {
		width: 100%;
		height: auto;
	}
`

const StyledContactFormBlock = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-content: flex-start;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 60rem) {
		width: 100%;
		height: auto;
	}
`

const StyledContactTitle = styled.h2`
	text-align: center;
	font-family: ff-tisa-web-pro, serif;
	font-weight: 400;
	font-size: 4rem;
	color: #fff;
	margin: 0;
`

const StyledContactText = styled.h2`
	flex: 0 0 100%;
	font-family: futura-pt, sans-serif;
	font-weight: 400;
	font-size: 2rem;
	color: #fff;
	margin-top: 3rem;
`

const StyledSocialLink = styled.a`
	font-family: futura-pt, sans-serif;
	font-weight: 500;
	font-size: 1.5rem;
	text-decoration: none;
	color: #fff;
	position: relative;
	cursor: pointer;
	margin-right: 2rem;
	margin-top: 2rem;

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
`

const StyledContactForm = styled.form`
	display: flex;
	flex-direction: column;
`

const StyledContactFormTitle = styled.h3`
	font-family: futura-pt, sans-serif;
	font-weight: 400;
	font-size: 1.5rem;
	color: #cc6666;
`

const StyledContactFormInput = styled.input`
	background: none;
	border: .125rem solid #cc6666;
	padding: 1rem 2rem;
	color: #cc6666;
	font-family: futura-pt, sans-serif;
	font-weight: 400;
	font-size: 1.5rem;
	transition: all .3s ease-in;

	:focus {
		border-color: #fff;
		color: #fff;
	}
`

const StyledContactFormSubmit = styled.button`
	background: #cc6666;
	border: .125rem solid #cc6666;
	padding: 1rem 2rem;
	color: #fff;
	margin-top: 2rem;
	font-family: futura-pt, sans-serif;
	font-weight: 500;
	font-size: 1.5rem;
	cursor: pointer;
	transition: all .3s ease-in;

	:hover {
		background: none;
		color: #cc6666;
	}
`

const Contact = () => (
	<StyledBackground>
		<StyledBackgroundContainer>
			<StyledContent>
				<StyledContactInfoBlock>
					<StyledContactTitle>Contact Us</StyledContactTitle>
					<StyledContactText>We’ll answer you in less than 3 hours</StyledContactText>
					<StyledSocialLink>Instagram</StyledSocialLink>
					<StyledSocialLink>Facebook</StyledSocialLink>
				</StyledContactInfoBlock>
				<StyledContactFormBlock>
					<StyledContactForm name="contact" method="post" action="/">
						<input type="hidden" name="form-name" value="contact" />
						<StyledContactFormTitle>Full Name</StyledContactFormTitle>
						<StyledContactFormInput type="name" name="name" placeholder="Ivan Ivanov" />
						<StyledContactFormTitle>Phone Number</StyledContactFormTitle>
						<StyledContactFormInput type="phone" name="phone" placeholder="050-505-50-50" />
						<StyledContactFormSubmit type="submit">Send</StyledContactFormSubmit>
					</StyledContactForm>
				</StyledContactFormBlock>
			</StyledContent>
		</StyledBackgroundContainer>
	</StyledBackground>
);

export default Contact;
