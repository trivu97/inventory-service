import HTTPStatus from "http-status";
import Bill from "./bill.model";

export const getBill = async (req, res) => {
  try {
    const bills = await Bill.find({ isActive: true })
      .sort({ createdAt: -1 })
      .populate("employee inventory");
    return res.status(HTTPStatus.OK).json(bills);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const getBillById = async (req, res) => {
  try {
    const { id } = req.params;
    const bill = await Bill.findById(id).populate("employee inventory");
    if (!bill) {
      throw new Error("Bill not found");
    }
    return res.status(HTTPStatus.OK).json(bill);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const createBill = async (req, res) => {
  try {
    const bill = await Bill.create(req.body);
    bill.employee = req.user._id;
    await bill.save();
    return res.status(HTTPStatus.CREATED).json(bill);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const updateBill = async (req, res) => {
  try {
    const { id } = req.params;
    const bill = await Bill.findById(id);
    if (!bill) {
      throw new Error("Bill not found");
    }
    Object.keys(req.body).forEach(key => (bill[key] = req.body[key]));
    await bill.save();
    return res.status(HTTPStatus.OK).json(bill);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};

export const removeBill = async (req, res) => {
  try {
    const { id } = req.params;
    const bill = await Bill.findById(id);
    if (!bill) {
      throw new Error("Bill not found");
    }
    bill.isActive = false;
    bill.save();
    return res.status(HTTPStatus.OK).json(bill);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};
