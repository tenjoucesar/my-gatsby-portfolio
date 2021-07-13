import React from 'react';
import { Title, Container } from './styles';

const SkillsContainer = ({ title, skills, theme }) => (
  <>
    <Title>{title}</Title>
    <Container theme={theme}>
      {skills.map(({ id, text, logo }) => (
        <p key={id}>
          {text}
          {logo && <img src={logo} fill={'white'} />}
        </p>
      ))}
    </Container>
  </>
);

export default SkillsContainer;
