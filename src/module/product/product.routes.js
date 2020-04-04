import {Router} from 'express';
import validate from 'express-validation';

import {getProduct, getProductById, createProduct, updateProduct, removeProduct} from './product.controllers';
import Validations from './product.validations';
import { auth } from '../../service/passport';

const routes = new Router();

routes.get('/', auth, getProduct);
routes.get('/:id', auth, getProductById);
routes.post('/', auth, validate(Validations.createProduct), createProduct);
routes.patch('/:id', auth, validate(Validations.updateProduct), updateProduct);
routes.delete('/:id', auth, removeProduct);

export default routes;