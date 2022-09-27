import css from './Modal.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ onClose, show, src, alt }) => {
  useEffect(() => {
    const escFunction = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [onClose]);

  if (!show) {
    return null;
  }

  return (
    <div onClick={onClose} className={css.Overlay}>
      <div onClick={e => e.stopPropagation()} className={css.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
};
export default Modal;
