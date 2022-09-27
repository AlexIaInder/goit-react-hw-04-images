import axios from 'axios';

const URL_BASE = 'https://pixabay.com/api/';
const PER_PAGE = 12;
const API_KEY = '29463489-77d25348d002e70b6c5026d29';

export const fetchImages = async ({ q, page }) =>
  axios
    .get(URL_BASE, {
      params: {
        q,
        page,
        key: API_KEY,
        image_type: 'jpg',
        orientation: 'horizontal',
        per_page: PER_PAGE,
      },
    })
    .then(res => res.data);
