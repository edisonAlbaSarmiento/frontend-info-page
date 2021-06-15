import styled from 'styled-components';

export const Title = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '58px')};
  font-weight: ${(props) =>
    (props.variant === 'title' && 'bold') ||
    (props.variant === 'subtitle' && 'normal')};
  margin: ${(props) => props.marginText};
  line-height: 1;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  @media (max-width: 768px) {
    font-size: ${(props) =>
      (props.variant === 'title' && '34px') ||
      (props.variant === 'subtitle' && '16px')};
  }
`;
