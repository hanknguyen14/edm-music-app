import { getRandomArrayIndex } from 'utils/helpers';

const BACKGROUND_FOLDER = 'backgrounds';
const BACKGROUND_URLS = [
  'background1.jpg',
  // 'background2.jpeg',
  // 'background3.jpg',
  // 'background4.jpg',
  // 'background5.jpg',
  // 'background6.jpg',
  // 'background7.jpg',
  // 'background8.jpeg',
];
const getRandomBackgroundUrl = () => {
  const backgroundIndex = getRandomArrayIndex(BACKGROUND_URLS.length);
  return `${BACKGROUND_FOLDER}/${BACKGROUND_URLS[backgroundIndex]}`;
};
export default getRandomBackgroundUrl;
