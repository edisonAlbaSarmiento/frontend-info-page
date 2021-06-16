import styled from 'styled-components';

export const ContentTempleate = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
