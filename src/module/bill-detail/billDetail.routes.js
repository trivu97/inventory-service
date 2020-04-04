import {Router} from 'express';
import validate from 'express-validation';

import {getBillDetail, getBillDetailById, getBillDetailByBill, createBillDetail, updateBillDetail, removeBillDetail} from './billDetail.controllers';
import Validations from './billDetail.validations';
import { auth } from '../../service/passport';

const routes = new Router();

routes.get('/', auth, getBillDetail);
routes.get('/:id', auth, getBillDetailById);
routes.get('/bill/:id', auth, getBillDetailByBill);
routes.post('/', auth, validate(Validations.createBillDetail), createBillDetail);
routes.patch('/:id', auth, validate(Validations.updateBillDetail), updateBillDetail);
routes.delete('/:id', auth, removeBillDetail);

export default routes;