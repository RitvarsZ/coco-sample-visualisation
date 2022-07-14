import { data } from './data.json';

export const getImageById = (id) => data.find((item) => item.id === parseInt(id, 10));
export const getAllImages = () => data;
