import Product from './product.model';
import HTTPStatus from 'http-status';

export const getProduct = async (req, res) => {
  try {
    const product = await Product.find({isActive: true});
    return res.status(HTTPStatus.OK).json(product);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(HTTPStatus.CREATED).json(product);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    if(!product) {
      throw new Error('Product not found');
    }
    return res.status(HTTPStatus.OK).json(product);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    if(!product) {
      throw new Error('Product not found');
    }
    Object.keys(req.body).forEach(key => product[key] = req.body[key]);
    await product.save();
    return res.status(HTTPStatus.OK).json(product);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const removeProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    if(!product) {
      throw new Error('Product not found');
    }
    product.isActive = false;
    await product.save();
    return res.status(HTTPStatus.OK).json(product);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};