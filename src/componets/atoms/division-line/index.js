import styled from 'styled-components';
import { prop } from 'styled-tools';

const DivisionLine = styled.div`
  width: ${prop('width', '100%')};
  height: ${prop('height', '100%')};
  margin: ${prop('margin', '1.25rem 0')};
  border-bottom: 0.7px solid ${prop('color', prop('theme.colors.grayMedium'))};
`;

export default DivisionLine;
