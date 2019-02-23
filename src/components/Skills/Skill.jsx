import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const backgroundColor = 'black'

const StyledDiv = styled.div`
  text-align: center;
  display: inline-block;
`;

const LogoContainer = styled.div`
  background: #fafafa;
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin: 0 auto 10px auto;

  @media (max-width: 1000px) {
    height: 70px;
    width: 70px;
  }
`;

const Logo = styled.div`
  background: url(${(props) => props.logo}) no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  height: 90%;
  width: 90%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
`;

const TextContainer = styled.a`
  margin-top: 10px;
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;

  @media (min-width: 1000px) {
    transition-duration: 0.3s;
    &:hover {
      transition-duration: 0.3s;
      background: white;
      color: ${backgroundColor};
    }
  }
`;

function Skill ({ name, logo, link }) {
  return(
    <StyledDiv>
      <LogoContainer>
        <Logo logo={logo} />
      </LogoContainer>
      <TextContainer href={link}>
        {name}
      </TextContainer>
    </StyledDiv>
  );
}

Skill.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  link: PropTypes.string
}

export default Skill;
