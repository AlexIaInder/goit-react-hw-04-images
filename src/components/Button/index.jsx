import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onloadMore }) => {
  return (
    <div className={css['Button-container']} onClick={onloadMore}>
      <button type="button" className={css.Button}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onloadMore: PropTypes.func,
};
export default Button;
