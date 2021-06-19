import PropTypes from 'prop-types';
import { ContentTempleate } from './style';
import { FooterComponent } from '../../molecules';

const HomeTemplate = (props) => {
  return (
    <div className="container mx-auto">
      <ContentTempleate>{props.cardInfo}</ContentTempleate>
      <FooterComponent />
    </div>
  );
};

HomeTemplate.defaultProps = {};

HomeTemplate.propTypes = {
  cardInfo: PropTypes.element.isRequired,
};

export default HomeTemplate;
