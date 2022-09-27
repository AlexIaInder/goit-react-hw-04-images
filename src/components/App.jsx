import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { fetchImages } from './services/api';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { useState } from 'react';

const App = () => {
  const [state, setState] = useState({
    search: '',
    page: 1,
    images: [],
    isLoading: false,
    largeImageURL: '',
    largeImageURLAlt: '',
    showModal: false,
  });

  const onSubmit = async (q, page) => {
    setState({ ...state, isLoading: true });
    const data = await fetchImages({ q, page });
    const images = page === 1 ? data.hits : [...state.images, ...data.hits];

    if (page === 1) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    setState({
      ...state,
      page,
      images,
      isLoading: false,
    });
  };

  const onloadMore = () => {
    const { search, page } = state;
    const newPage = page + 1;

    setState({ ...state, page: newPage });
    onSubmit(search, newPage);
  };

  return (
    <>
      <Searchbar
        onSubmit={onSubmit}
        search={state.search}
        setSearch={newSearch => setState({ ...state, search: newSearch })}
      />
      <ImageGallery
        images={state.images}
        setModalImage={(src, alt) =>
          setState({
            ...state,
            largeImageURL: src,
            showModal: true,
            largeImageURLAlt: alt,
          })
        }
      />
      {state.images.length > 0 && (
        <Button onloadMore={onloadMore} page={state.page} />
      )}
      {state.isLoading && <Loader />}
      <Modal
        show={state.showModal}
        onClose={() => setState({ ...state, showModal: false })}
        src={state.largeImageURL}
        alt={state.largeImageURLAlt}
      />
    </>
  );
};

export default App;
