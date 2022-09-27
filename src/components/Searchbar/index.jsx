import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { MdOutlineImageSearch } from 'react-icons/md';

const Searchbar = ({ onSubmit, search, setSearch }) => {
  const handelSearchChange = event => {
    setSearch(event.target.value);
  };

  const handelSubmit = event => {
    event.preventDefault();

    if (search.trim() === '') {
      return alert('Please enter something...');
    }

    onSubmit(search.toLowerCase(), 1);
  };

  return (
    <header className={css.Searchbar}>
      <form onSubmit={handelSubmit} className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span>
            <MdOutlineImageSearch size={30} />
          </span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handelSearchChange}
          name="search"
          value={search}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

export default Searchbar;
