import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img
          onClick={this.props.onClick}
          className={css['ImageGalleryItem-image']}
          src={this.props.src}
          alt={this.props.alt}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageGalleryItem;
