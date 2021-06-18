import '../../App.css';

import UserGetData from '../../service';
import { HomeTemplate } from '../../componets/templates';
import { CardCircle } from '../../componets/organisms';

function Home() {
  const myDataTest = UserGetData();
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <HomeTemplate
          cardInfo={<CardCircle dataCard={myDataTest.dataCard} />}
        />
      </body>
    </div>
  );
}

export default Home;
