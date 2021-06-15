import { useState, useEffect } from 'react';

const apiUrl =
  'https://raw.githubusercontent.com/edisonAlbaSarmiento/frontend-info-page/master/data-test/data.json';

const UserGetData = () => {
  const [myData, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return myData;
};

export default UserGetData;
