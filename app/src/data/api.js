const API = 'https://atisapply.github.io/coco-sample-api/data.json';

export const getAllImages = async () => fetch(API).then((res) => res.json());
export const getImageById = async (id) => getAllImages()
  .then((res) => res.data.find((image) => image.id === parseInt(id, 10)));
