import {Router} from 'express';
import validate from 'express-validation';

import {getInventory, getInventoryById, createInventory, updateInventory, removeInventory} from './inventory.controllers';
import Validations from './inventory.validations';
import { auth } from '../../service/passport';

const routes = new Router();

routes.get('/', auth, getInventory);
routes.get('/:id', auth, getInventoryById);
routes.post('/', auth, validate(Validations.createInventory), createInventory);
routes.patch('/:id', auth, validate(Validations.updateInventory), updateInventory);
routes.delete('/:id', auth, removeInventory);

export default routes;