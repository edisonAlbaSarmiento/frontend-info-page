import PropTypes from 'prop-types';
import { ContentTempleate } from './style';

const HomeTemplate = (props) => {
  return (
    <div class="container mx-auto">
      <ContentTempleate>{props.cardInfo}</ContentTempleate>
      <footer className="footer">
        <div>Author: Edison Alba</div>
        <div>
          Github:
          <a href="https://github.com/edisonAlbaSarmiento"> Edison Alba</a>
        </div>
        <div>
          <a href="mailto:hege@example.com">edi9708@hotmail.com</a>
        </div>
      </footer>
    </div>
  );
};

HomeTemplate.defaultProps = {};

HomeTemplate.propTypes = {
  cardInfo: PropTypes.element.isRequired,
};

export default HomeTemplate;
