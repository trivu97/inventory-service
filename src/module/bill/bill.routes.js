import {Router} from 'express';
import validate from 'express-validation';

import {getBill, getBillById, createBill, updateBill, removeBill} from './bill.controllers';
import {auth} from '../../service/passport';
import Validation from './bill.validations';

const routes = new Router();

routes.get('/', auth, getBill);
routes.get('/:id', auth, getBillById);
routes.post('/', auth, validate(Validation.createBill), createBill);
routes.patch('/:id', auth, validate(Validation.updateBill), updateBill);
routes.delete('/:id', auth, removeBill);

export default routes;