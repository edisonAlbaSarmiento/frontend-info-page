import { CircleComponent } from '../../molecules';
import {
  ContentCardCircle,
  ContetText,
  ContentFooterText,
  SubContentText,
} from './style';

function CardCircle() {
  return (
    <>
      <ContentCardCircle>
        <CircleComponent />
        <ContentFooterText>
          <ContetText>
            <div>Tablet</div>
            <SubContentText>
              <div>1</div>
              <div>2</div>
            </SubContentText>
          </ContetText>
          <ContetText>
            <div>Smartphone</div>
            <SubContentText>
              <div>1</div>
              <div>2</div>
            </SubContentText>
          </ContetText>
        </ContentFooterText>
      </ContentCardCircle>
      <ContentCardCircle>
        <CircleComponent />
        <ContentFooterText>
          <ContetText>
            <div>Tablet</div>
            <SubContentText>
              <div>1</div>
              <div>2</div>
            </SubContentText>
          </ContetText>
          <ContetText>
            <div>Smartphone</div>
            <SubContentText>
              <div>1</div>
              <div>2</div>
            </SubContentText>
          </ContetText>
        </ContentFooterText>
      </ContentCardCircle>
    </>
  );
}

export default CardCircle;
