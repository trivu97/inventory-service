import userRoutes from './user/user.routes';
import billRoutes from './bill/bill.routes';
import billDetailRoutes from './bill-detail/billDetail.routes';
import inventoryRoutes from './inventory/inventory.routes';
import productRoutes from './product/product.routes';
import inventoryDetailRoutes from './inventory-detail/inventoryDetail.routes';

export default app => {
  app.use('/user', userRoutes);
  app.use('/bill', billRoutes);
  app.use('/billDetail', billDetailRoutes);
  app.use('/inventory', inventoryRoutes);
  app.use('/product', productRoutes);
  app.use('/inventoryDetail', inventoryDetailRoutes);
}