import HTTPStatus from "http-status";
import User from "./user.model";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    const user = await User.findOne({ username });
    console.log(user);
    if (!user || !user.validatePassword(password)) {
      throw new Error("Wrong username or password");
    }
    return res.status(HTTPStatus.OK).json(user.toAuthJSON());
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const { username } = req.body;
    if (!username || username.length <= 5) {
      throw new Error("Min length is 6");
    }
    const checkDuplicate = await User.findOne({
      username: req.body.username,
    });
    if (checkDuplicate) {
      throw new Error("Duplicate user!");
    }
    const user = await User.create({
      ...req.body,
      // password: Account.hashPassword(req.password),
    });

    // console.log('1', user.password);
    // user.password = user.hashPassword(req.password);
    // console.log('2', user.password);
    // await user.save();

    return res.status(HTTPStatus.CREATED).json(user.toAuthJSON());
  } catch (error) {
    console.log(error);
    return res.status(HTTPStatus.BAD_REQUEST).json(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const account = await User.findOne({ _id: id });
    if (!account) {
      throw new Error("Account not found!");
    }

    Object.keys(req.body).forEach((key) => {
      account[key] = req.body[key];
    });
    await account.save();

    return res.status(HTTPStatus.OK).json(account.toJSON());
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e.message || e);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      user.isActive = false;
      await user.save();
    } else {
      throw new Error("User not found");
    }
    return res.status(HTTPStatus.OK).json(user.toJSON());
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e.message || e);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      throw new Error("User not found");
    }
    return res.status(HTTPStatus.OK).json(user.toJSON());
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error);
  }
};
