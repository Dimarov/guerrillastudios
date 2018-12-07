import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
	position: fixed;
	width: 100%;
	margin-top: 2rem;
	height: 4rem;
	z-index: 9000;
`;

const StyledHeaderContainer = styled.div`
	width: 90%;
	max-width: 90rem;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledLogo = styled.div`
	width: 16rem;
	height: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #cc6666;
	border: .25rem solid #cc6666;
	box-shadow: 0 .25rem .5rem rgba(0,0,0,.16);
	transition: all .3s ease-out;
	cursor: pointer;

	:hover {
		background: none;
		border: .25rem solid #cc6666;

		h1 {
			color: #cc6666;
		}
	}

	@media screen and (max-width: 60rem) {

	}
`;

const StyledLogoText = styled.h1`
	font-family: futura-pt, sans-serif;
	font-weight: 700;
	font-size: 2rem;
	color: #fff;
	transition: all .3s ease-out;
`;

const StyledLogoTextBook = styled.span`
	font-weight: 400;
`;

const StyledLink = styled.a`
	text-decoration: none;
`

const StyledNav = styled.div`
	width: 24rem;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledNavLink = styled.a`
	font-family: futura-pt, sans-serif;
	font-weight: 500;
	font-size: 1.5rem;
	text-decoration: none;
	color: #fff;
	cursor: pointer;
	position: relative;

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
`;

const Header = () => (
	<StyledHeader>
		<StyledHeaderContainer>
			<StyledLink href="/">
				<StyledLogo>
					<StyledLogoText>
						Guerrilla <StyledLogoTextBook>Studios</StyledLogoTextBook>
					</StyledLogoText>
				</StyledLogo>
			</StyledLink>
			{/* <StyledNav>
					<StyledNavLink>Work</StyledNavLink>
					<StyledNavLink>About</StyledNavLink>
					<StyledNavLink>Contact</StyledNavLink>
			</StyledNav> */}
		</StyledHeaderContainer>
	</StyledHeader>
);

export default Header;
