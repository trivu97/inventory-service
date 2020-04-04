import HTTPStatus from "http-status";
import BillDetail from "./billDetail.model";

export const getBillDetail = async (req, res) => {
  try {
    const billDetail = await BillDetail.find({ isActive: true }).populate(
      "product bill"
    );
    return res.status(HTTPStatus.OK).json(billDetail);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const getBillDetailById = async (req, res) => {
  try {
    const { id } = req.params;
    const billDetail = await BillDetail.findById(id);
    return res.status(HTTPStatus.OK).json(billDetail);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const getBillDetailByBill = async (req, res) => {
  try {
    const { id } = req.params;
    const billDetail = await BillDetail.find({
      bill: id,
      isActive: true
    }).populate("product bill");
    return res.status(HTTPStatus.OK).json(billDetail);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const createBillDetail = async (req, res) => {
  try {
    const exist = await BillDetail.findOne({
      bill: req.body.bill,
      product: req.body.product,
      isActive: true
    });
    if (exist) {
      exist.quantity = exist.quantity + req.body.quantity;
      await exist.save();
      return res.status(HTTPStatus.CREATED).json(exist);
    }
    const billDetail = await BillDetail.create(req.body);
    return res.status(HTTPStatus.CREATED).json(billDetail);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const updateBillDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const billDetail = await BillDetail.findById(id);
    Object.keys(req.body).forEach(key => {
      billDetail[key] = req.body[key];
    });
    await billDetail.save();
    return res.status(HTTPStatus.OK).json(billDetail);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const removeBillDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const billDetail = await BillDetail.findById(id);
    billDetail.isActive = false;
    await billDetail.save();
    return res.status(HTTPStatus.OK).json(billDetail);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};
