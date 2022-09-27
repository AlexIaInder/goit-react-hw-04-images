import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { fetchImages } from './services/api';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
export class App extends Component {
  state = {
    search: '',
    page: 1,
    images: [],
    isLoading: false,
    largeImageURL: '',
    largeImageURLAlt: '',
    showModal: false,
  };

  onSubmit = async (q, page) => {
    this.setState({ isLoading: true });
    const data = await fetchImages({ q, page });
    const images =
      page === 1 ? data.hits : [...this.state.images, ...data.hits];

    if (page === 1) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    this.setState({
      ...this.state,
      page,
      images,
      isLoading: false,
    });
  };

  onloadMore = () => {
    const { search, page } = this.state;
    const newPage = page + 1;

    this.setState({ page: newPage });
    this.onSubmit(search, newPage);
  };

  render() {
    const {
      images,
      search,
      isLoading,
      showModal,
      largeImageURL,
      largeImageURLAlt,
    } = this.state;

    return (
      <>
        <Searchbar
          onSubmit={this.onSubmit}
          search={search}
          setSearch={newSearch => this.setState({ search: newSearch })}
        />
        <ImageGallery
          images={this.state.images}
          setModalImage={(src, alt) =>
            this.setState({
              largeImageURL: src,
              showModal: true,
              largeImageURLAlt: alt,
            })
          }
        />
        {images.length > 0 && (
          <Button onloadMore={this.onloadMore} page={this.state.page} />
        )}
        {isLoading && <Loader />}
        {showModal && (
          <Modal
            show={showModal}
            onClose={() => this.setState({ showModal: false })}
            src={largeImageURL}
            alt={largeImageURLAlt}
          />
        )}
      </>
    );
  }
}
