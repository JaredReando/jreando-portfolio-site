import React from 'react';
import styled from 'styled-components';
import logo from '../assets/image_links/logo'
import clearDog from '../assets/img/clear_dog.png';
import greezno from '../assets/img/greezno.png';
import myLogo from '../assets/img/my_logo.png';

const mobileBG = 'https://res.cloudinary.com/starksten/image/upload/v1543685006/New%20Portfolio%202/mobileBG.png'

const topLeft = 'https://res.cloudinary.com/starksten/image/upload/v1539070734/New%20Portfolio%202/Top_Right.png'

// const logo = 'https://res.cloudinary.com/starksten/image/upload/v1539070735/New%20Portfolio%202/Logo.png'

const topMiddle = 'https://res.cloudinary.com/starksten/image/upload/v1539070734/New%20Portfolio%202/Top_Middle.png'

const StyledDiv = styled.div`
	color: black;

	@media (min-width: 1000px) {
		height: 100vh;
	}

	@media (max-width: 1000px) {
		background: url(${mobileBG}) no-repeat;
		background-size: 100% 100%;
		background-attachment: fixed;
		background-position: center;
		padding-bottom: 30px;
		padding-top: 50px;
	}
`;

const GridContainer = styled.div`
	@media (min-width: 1000px) {
		display: grid;
		grid-template-areas: 'wrapper logo' 'wrapper logo';
		grid-auto-rows: 1fr;
		grid-auto-columns: 2fr 1fr;
		width: 100%;
		position: relative;
		top: 50%;
		transform: translateY(-65%);
	}
`;

const TopLeftBG = styled.div`
  @media (min-width: 1000px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 340px;
    height: 150px;
    background: url('${myLogo}') no-repeat;
    background-size: 100% 100%;
    z-index: -2;
  }
`;

const Container = styled.div`
	@media (min-width: 1000px) {
		grid-area: nameAndPos;
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 550px;
		margin: auto;
	}

	@media (max-width: 1000px) {
		width: 80%;
		margin: 50px auto 100px auto;
		text-align: center;
	}

	@media (max-width: 500px) {
		width: 90%;
		margin: 50px auto;
	}
`;

const NameContainer = styled.div`
	letter-spacing: 5px;
	letter-spacing: 0.2em;


	@media (max-width: 1000px) {
		font-size: 1.8em;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 500px) {
		font-size: 1.3em;
		margin: 0 auto;
	}

	@media (min-width: 1000px) {
		font-size: 2.5em;
		grid-area: name;
	}
`;

const Position = styled.div`
	font-size: 1.5em;
	letter-spacing: 0.1em;


	@media (max-width: 1000px) {
		font-size: 1em;
		margin: 0;
	}

	@media (max-width: 500px) {
		margin: 0 auto;
	}
`;

const LogoContainer = styled.div`
	width: 300px;
	height: 300px;
	margin-top: 100px;
	background: url(${myLogo}) no-repeat;
	background-size: 100% 100%;
	grid-area: logo;


	@media (max-width: 1000px) {
		width: 200px;
		height: 200px;
		margin: 0 auto -40px auto;
	}
`;

const AboutMe = styled.div`
	font-size: 18px;

	text-align: justify;

	@media (max-width: 1000px) {
		width: 85%;
		margin: -50px auto 0 auto;
		font-size: 1.2em;
		text-align: center;
	}

	@media (max-width: 500px) {
		margin: 20px auto 40px auto;
		font-size: 1em;
	}

	@media (min-width: 1000px) {
		grid-area: about;
		width: 550px;
		margin: auto;
		font-size: 1.2em;
	}
`;

const BottomBG = styled.div`
	@media (min-width: 1000px) {
		position: absolute;
		background: url(${topMiddle}) no-repeat;
		background-size: 101% 100%;
		bottom: -20px;
		height: 200px;
		z-index: -2;
		width: 100%;
	}
`;

const Wrapper = styled.div`
	grid-area: wrapper;
	height: 120%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const description = `I've always been interested in web technology and computer programming. 

After graduating with a double degree in religious studies and english lit in 2012, I helped start and run a large shipping warehouse for the last six years for a fancy baby gear brand. Go figure.
I've tinkered and built things since I was little, driven by a deep-seated curiosity to know how the world works.
In my career so far, I've found success wherever I plant roots, look around, and ask, 'What's going on here? What can I learn? How can I make things better?"
I stumbled into programming sideways, driven by necessity to find solid solutions to real world problems that weren't going away on their own.
Seeing firsthand the transformative impact of well applied technology inspired my transition to pursue programming full time as a web developer.
I'm wrapping up a full-time bootcamp enrollment at Epicodus, drinking daily from the information firehose to learn Ruby, Javascript, and a handful of accompanying libraries and frameworks.
Check out below to read more about what I've been doing so far.
`;

function About2() {
  return (
    <StyledDiv>
      <TopLeftBG />
      <GridContainer>
        <LogoContainer />
        <Wrapper>
          <Container>
            <NameContainer>JARED REANDO</NameContainer>
            <Position>Full-Stack Developer</Position>
          </Container>
          <AboutMe>{description}</AboutMe>
        </Wrapper>
      </GridContainer>
      <BottomBG />
    </StyledDiv>
  );
}

export default About2;

