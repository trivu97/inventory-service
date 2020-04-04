import HTTPStatus from 'http-status';
import Inventory from './inventory.model';

export const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find({isActive: true});
    return res.status(HTTPStatus.OK).json(inventory);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const getInventoryById = async (req, res) => {
  try {
    const {id} = req.params;
    const inventory = await Inventory.findById(id);
    if(!inventory) { 
      throw new Error('Inventory not found');
    }
    return res.status(HTTPStatus.OK).json(inventory);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const createInventory = async (req, res) => {
  try {
    const inventory = await Inventory.create(req.body);
    return res.status(HTTPStatus.CREATED).json(inventory);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const updateInventory = async (req, res) => {
  try {
    const {id} = req.params;
    const inventory = await Inventory.findById(id);
    if(!inventory) { 
      throw new Error('Inventory not found');
    }
    Object.keys(req.body).forEach(key => inventory[key] = req.body[key]);
    await inventory.save();
    return res.status(HTTPStatus.OK).json(inventory);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const removeInventory = async (req, res) => {
  try {
    const {id} = req.params;
    const inventory = await Inventory.findById(id);
    if(!inventory) { 
      throw new Error('Inventory not found');
    }
    inventory.isActive = false;
    await inventory.save();
    return res.status(HTTPStatus.OK).json(inventory);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
}
