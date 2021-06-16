import { ContentCircle } from './style';

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
    </ContentCircle>
  );
}

export default CircleComponent;
