import css from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, setModalImage }) => (
  <ul className={css.ImageGallery}>
    {images.map(image => (
      <ImageGalleryItem
        onClick={() => setModalImage(image.largeImageURL, image.user)}
        key={image.id}
        src={image.webformatURL}
        alt={image.user}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      user: PropTypes.string,
    })
  ),
  setModalImage: PropTypes.func,
};

export default ImageGallery;
