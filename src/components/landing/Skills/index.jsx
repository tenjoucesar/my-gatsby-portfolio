import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

import {
  feSkills,
  beSkills,
  mobileSkills,
  otherSkills
} from './Skills';
import SkillsContainer from './SkillsContainer';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="skills">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Cesar and I’m a oftware engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Skills</h1>
          <SkillsContainer
            title='FE'
            skills={feSkills}
            theme={theme}
          />
          <SkillsContainer
            title='BE'
            skills={beSkills}
            theme={theme}
          />
          <SkillsContainer
            title='Mobile'
            skills={mobileSkills}
            theme={theme}
          />
          <SkillsContainer
            title='Others'
            skills={otherSkills}
            theme={theme}
          />
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
