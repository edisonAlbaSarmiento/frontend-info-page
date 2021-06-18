import { TitleComponet } from '../../atoms';

// import GraphicsComponet from '../graphics';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { ContentCircle, ContentTitles } from './style';
import theme from '../../../themes';

function CircleComponent({ dataInfo }) {
  const percentage = parseInt(dataInfo.percentageSmartphone);

  return (
    <ContentCircle>
      <CircularProgressbarWithChildren
        value={percentage}
        // text={`${percentage}%`}
        strokeWidth={5}
        styles={buildStyles({
          textColor: 'red',
          pathColor: `${
            (dataInfo.title === 'REVENUE' && theme.color.greeRegular) ||
            (dataInfo.title === 'IMPRESIONS' && theme.color.blueRegular) ||
            (dataInfo.title === 'VISITS' && theme.color.yellowRegular)
          }`,
          trailColor: `${
            (dataInfo.title === 'REVENUE' && theme.color.greenText) ||
            (dataInfo.title === 'IMPRESIONS' && theme.color.blueText) ||
            (dataInfo.title === 'VISITS' && theme.color.yellowText)
          }`,
          strokeLinecap: 'butt',
        })}
      >
        <ContentTitles>
          <TitleComponet
            fontSize="18px"
            variant="title"
            color={theme.color.gray}
          >
            {dataInfo.title}
          </TitleComponet>
          <TitleComponet
            fontSize="25px"
            variant="title"
            color={theme.color.black}
          >
            {dataInfo.title === 'REVENUE'
              ? `${dataInfo.price}€`
              : dataInfo.price}
          </TitleComponet>
        </ContentTitles>

        {/* <ContentChildren>
          <GraphicsComponet />
        </ContentChildren> */}
      </CircularProgressbarWithChildren>
    </ContentCircle>
  );
}

export default CircleComponent;
