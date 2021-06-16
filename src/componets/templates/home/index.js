import PropTypes from 'prop-types';

const HomeTemplate = (props) => {
  return (
    <>
      <div>{props.cardInfo}</div>
    </>
  );
};

HomeTemplate.defaultProps = {};

HomeTemplate.propTypes = {
  cardInfo: PropTypes.element.isRequired,
};

export default HomeTemplate;
