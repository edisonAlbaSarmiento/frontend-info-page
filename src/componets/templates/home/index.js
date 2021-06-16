import PropTypes from 'prop-types';
import { ContentTempleate } from './style';

const HomeTemplate = (props) => {
  return (
    <>
      <ContentTempleate>{props.cardInfo}</ContentTempleate>
    </>
  );
};

HomeTemplate.defaultProps = {};

HomeTemplate.propTypes = {
  cardInfo: PropTypes.element.isRequired,
};

export default HomeTemplate;
