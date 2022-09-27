import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  escFunction = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div onClick={this.props.onClose} className={css.Overlay}>
        <div onClick={e => e.stopPropagation()} className={css.Modal}>
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
};
export default Modal;
