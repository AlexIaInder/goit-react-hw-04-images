import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { MdOutlineImageSearch } from 'react-icons/md';

class Searchbar extends Component {
  handelSearchChange = event => {
    this.props.setSearch(event.target.value);
  };
  handelSubmit = event => {
    event.preventDefault();

    const { search } = this.props;

    if (search.trim() === '') {
      return alert('Please enter something...');
    }

    this.props.onSubmit(search.toLowerCase(), 1);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handelSubmit} className={css.SearchForm}>
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
            onChange={this.handelSearchChange}
            name="search"
            value={this.props.search}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

export default Searchbar;
