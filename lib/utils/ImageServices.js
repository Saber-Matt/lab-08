import images from '../models/Image.js';

export default class ImageService {

  static async create({ item, quantity }) {
    const order = await Image.insert({ item, quantity });
//do business logic here?
  }
};