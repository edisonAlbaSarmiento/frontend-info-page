import '../../App.css';

import UserGetData from '../../service';
import { HomeTemplate } from '../../componets/templates';
import { CardCircle } from '../../componets/organisms';

function Home() {
  const myDataTest = UserGetData();
  console.log('myDataTest', myDataTest);
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <HomeTemplate cardInfo={<CardCircle dataCard={myDataTest} />} />
      </body>
      <footer className="footer">
        <div>
          Author: Edison Alba
          <a href="https://github.com/edisonAlbaSarmiento">
            Github: Edison Alba
          </a>
        </div>
        <div>
          <a href="mailto:hege@example.com">edi9708@hotmail.com</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
