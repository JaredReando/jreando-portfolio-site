import React from 'react';
import styled from 'styled-components';
import Skill from './Skill';

import rubyLogo from '../../assets/img/logo_ruby.png';
import javascriptLogo from '../../assets/img/logo_javascript.png';
import railsLogo from '../../assets/img/logo_rails.png';
import reactLogo from '../../assets/img/logo_react.png';
import angularLogo from '../../assets/img/logo_angular.svg';
import htmlLogo from '../../assets/img/logo_html.png';
import cssLogo from '../../assets/img/logo_css.png';

const StyledDiv = styled.div`
  @media (min-width: 1000px) {
    height: 300px;
  }

  @media (max-width: 1000px) {
    padding: 50px 0;
  }
`;

const StyledTitle = styled.p`
  letter-spacing: 10px;
  font-size: 2em;
  font-weight: 300;
  color: white;

  @media (min-width: 1000px) {
    margin-left: 100px;
    z-index: 99999;
  }

  @media (max-width: 1000px) {
    text-align: center;
    letter-spacing: 8px;
  }
`;

const SkillsContainer = styled.div`
  width: 80%;
  margin: 50px auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const SkillContainer = styled.div`
  flex: 1;
  text-align: center;
  margin: 10px;
`;

function SkillList() {
  return (
    <StyledDiv>
      <StyledTitle>Skills</StyledTitle>
      <SkillsContainer>
        <InnerContainer>
          <SkillContainer>
            <Skill 
            name="Ruby" 
            logo={rubyLogo} 
            link="#" 
            />
          </SkillContainer>
          <SkillContainer>
            <Skill
              name="Rails"
              logo={railsLogo}
              link="#" 
            />
          </SkillContainer>
          <SkillContainer>
            <Skill
              name="Javascript"
              logo={javascriptLogo}
              link="#" 
            />
          </SkillContainer>
          <SkillContainer>
            <Skill
              name="React"
              logo={reactLogo}
              link="#" 
            />
          </SkillContainer>
          <SkillContainer>
            <Skill 
              name="Angular" 
              logo={angularLogo} 
              link="#"  
            />
          </SkillContainer>
          <SkillContainer>
            <Skill 
              name="CSS3" 
              logo={cssLogo} 
              link="#"  
            />
          </SkillContainer>
          <SkillContainer>
            <Skill 
              name="HTML5" 
              logo={htmlLogo} 
              link="#"  
            />
          </SkillContainer>
        </InnerContainer>
      </SkillsContainer>
    </StyledDiv>
  );
}

export default SkillList;
