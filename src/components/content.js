import React from "react";
import styled from "styled-components";

import Work from './work'
import About from './about'
import Contact from './contact'

const StyledContent = styled.div`
	position: relative;
	top: 100vh;
	width: 100%;
	height: auto;
	z-index: 90;
`;

const Content = () => (
	<StyledContent>
		<Work />
		<About />
		<Contact />
	</StyledContent>
);

export default Content;
