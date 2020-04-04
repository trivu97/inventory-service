import HTTPStatus from "http-status";
import InventoryDetail from "./inventoryDetail.model";

export const getInventoryDetail = async (req, res) => {
  try {
    const inventoryDetail = await InventoryDetail.find({
      isActive: true,
    }).populate("product inventory");
    return res.status(HTTPStatus.OK).json(inventoryDetail);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const getInventoryDetailById = async (req, res) => {
  try {
    const { id } = req.params;
    const inventoryDetail = await InventoryDetail.findById(id).populate(
      "product inventory"
    );
    if (!inventoryDetail) {
      throw new Error("Inventory detail not found");
    }
    return res.status(HTTPStatus.OK).json(inventoryDetail);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const getInventoryDetailByProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const inventoryDetail = await InventoryDetail.find({
      product: id,
      isActive: true,
    }).populate("product inventory");
    const list = inventoryDetail.filter(
      (item) => item.inventory.isActive === true
    );
    return res.status(HTTPStatus.OK).json(list);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const getInventoryDetailByInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const inventoryDetail = await InventoryDetail.find({
      inventory: id,
      isActive: true,
    }).populate("product inventory");
    const list = inventoryDetail.filter(
      (item) => item.product.isActive === true
    );
    return res.status(HTTPStatus.OK).json(list);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const createInventoryDetail = async (req, res) => {
  try {
    const inventoryDetail = await InventoryDetail.create(req.body);
    return res.status(HTTPStatus.CREATED).json(inventoryDetail);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const updateInventoryDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const inventoryDetail = await await InventoryDetail.findById(id);
    if (!inventoryDetail) {
      throw new Error("Inventory detail not found");
    }
    Object.keys(req.body).forEach(
      (key) => (inventoryDetail[key] = req.body[key])
    );
    if (inventoryDetail.quantity === 0) {
      inventoryDetail.isActive = false;
    }
    await inventoryDetail.save();
    return res.status(HTTPStatus.OK).json(inventoryDetail);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const removeInventoryDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const inventoryDetail = await (await InventoryDetail.findById(id)).populate(
      "product inventory"
    );
    if (!inventoryDetail) {
      throw new Error("Inventory detail not found");
    }
    inventoryDetail.isActive = false;
    await inventoryDetail.save();
    return res.status(HTTPStatus.OK).json(inventoryDetail);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};
