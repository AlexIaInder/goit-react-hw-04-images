import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { fetchImages } from './services/api';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { useState } from 'react';

const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [largeImageURLAlt, setLargeImageURLAlt] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (q, page) => {
    setIsLoading(true);
    const data = await fetchImages({ q, page });
    const newImages = page === 1 ? data.hits : [...images, ...data.hits];

    if (page === 1) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    setPage(page);
    setImages(newImages);
    setIsLoading(false);
  };

  const onloadMore = () => {
    const newPage = page + 1;

    setPage(newPage);
    onSubmit(search, newPage);
  };

  const setModalImage = (src, alt) => {
    setLargeImageURL(src);
    setShowModal(true);
    setLargeImageURLAlt(alt);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} search={search} setSearch={setSearch} />
      <ImageGallery images={images} setModalImage={setModalImage} />
      {images.length > 0 && <Button onloadMore={onloadMore} page={page} />}
      {isLoading && <Loader />}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        src={largeImageURL}
        alt={largeImageURLAlt}
      />
    </>
  );
};

export default App;
