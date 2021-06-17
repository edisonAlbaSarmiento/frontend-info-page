import { ContentCircle } from './style';
import GraphicsComponet from '../graphics';
// import { Progress } from 'antd';

function CircleComponent() {
  return (
    <ContentCircle>
      <div class="circle">
        <div class="mask full">
          <div class="fill"></div>
        </div>

        <div class="mask half">
          <div class="fill"></div>
        </div>

        <div class="inside-circle">70%</div>
      </div>

      <GraphicsComponet />
    </ContentCircle>
  );
}

export default CircleComponent;
