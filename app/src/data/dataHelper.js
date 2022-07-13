import { data } from './data.json';

export const getImageById = (id, callback) => {
  const image = data.find((item) => item.id === parseInt(id, 10));
  if (image) {
    callback(undefined, image);
  } else {
    callback('Not found', null);
  }
};

export const getAllImages = () => data;
