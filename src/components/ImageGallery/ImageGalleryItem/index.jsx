import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ onClick, src, alt }) => (
  <li className={css.ImageGalleryItem}>
    <img
      onClick={onClick}
      className={css['ImageGalleryItem-image']}
      src={src}
      alt={alt}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageGalleryItem;
