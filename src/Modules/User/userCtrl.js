const CustomError = require("../../Errors/CustomError");
const successResponse = require("../../Utils/apiResponse");
const asyncHandler = require("../../Utils/asyncHandler");
const UserService = require("./userService");

const userCtrl = {
    create: asyncHandler(async (req, res, next) => {
      const userData = req.body;

    const savedUser = await UserService.create(userData);

    return successResponse({
      res: res,
      data: savedUser,
      msg: "user created Successfully",
    });
    }),
  
    getAll: asyncHandler(async (req, res, next) => {
     
    }),
  
    getById: asyncHandler(async (req, res, next) => {
     
  
    }),
    update: asyncHandler(async (req, res, next) => {
     
    }),
  
    delete: asyncHandler(async (req, res, next) => {
     
    })
  };
  
  module.exports = userCtrl;
  