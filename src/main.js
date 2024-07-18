import { fetchPhotos } from './js/pixabay-api.js';
import { renderPhotos } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ref = {
  form: document.querySelector('.form'),
  input: document.querySelector('input'),
  button: document.querySelector('button'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

const bigImg = new SimpleLightbox('.gallery a');
bigImg.options.captionsData = 'alt';
bigImg.options.captionDelay = 250;

ref.form.addEventListener('submit', event => {
  event.preventDefault();
  const input = ref.input.value.trim();
  ref.gallery.innerHTML = '';
  if (input) {
    ref.loader.style = 'display:block';
    setTimeout(() => {
      fetchPhotos(input)
        .then(imgData => {
          if (imgData.hits.length) {
            ref.gallery.innerHTML = renderPhotos(imgData.hits);
            bigImg.refresh();
          } else {
            iziToast.warning({
              message:
                'Sorry, there are no images matching your search query. Please, try again!',
              position: 'topRight',
            });
          }
        })
        .catch(error => {})
        .finally(() => {
          ref.loader.style = 'display:none';
        });
    }, 500); // setTimeout for checking loader ;-)
  }

  ref.form.reset();
});

bigImg.on('show.simplelightbox', () => {});
