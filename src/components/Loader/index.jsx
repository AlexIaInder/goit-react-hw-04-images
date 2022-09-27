import { RevolvingDot } from 'react-loader-spinner';
import css from './Loader.module.css';
import PropTypes from 'prop-types';

const Loader = ({ visible }) => (
  <div className={css.Loader}>
    <RevolvingDot
      height="80"
      width="80"
      color="rgb(70, 70, 201)"
      secondaryColor=""
      ariaLabel="revolving-dot-loading"
      radius="50"
      wrapperStyle={{}}
      wrapperClass=""
      visible={visible}
    />
  </div>
);

Loader.propTypes = {
  visible: PropTypes.bool,
};

export default Loader;
