import '../../App.css';

import UserGetData from '../../service';
import { HomeTemplate } from '../../componets/templates';
import { CardCircle } from '../../componets/organisms';

function Home() {
  const myDataTest = UserGetData();
  return (
    <div>
      <header className="App-header"></header>
      <HomeTemplate cardInfo={<CardCircle dataCard={myDataTest.dataCard} />} />
    </div>
  );
}

export default Home;
