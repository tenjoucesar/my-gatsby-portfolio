import styled from 'styled-components';

export const Title = styled.h2`
  @media (min-width: 961px) {
    text-align: right;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  p {
    font-size: 16px;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#707070')};
    display: flex;
    align-items: center;
    margin-right: 15px;

    img {
      background: ${({ theme }) => (theme === 'dark' ? 'white' : '')};
    }
  }

  @media (min-width: 520px) {
    p {
      margin-right: 20px;
    }
  }

  @media (min-width: 961px) {
    justify-content: flex-end;

    p {
      margin-left: 20px;
      margin-right: 0;
    }
  }
`;
