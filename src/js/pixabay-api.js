const baseURL = 'https://pixabay.com/api/';
const apiKEY = '43864553-6e6fc803e67c38d9a685f3364';

export const fetchPhotos = (q = 'sdsdsd') => {
  const searchParams = new URLSearchParams({
    key: apiKEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
  });
  return fetch(`${baseURL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
};
