const asyncHandler = require("../../Utils/asyncHandler");
const CustomerService = require("./customerService");
const successResponse = require("../../Utils/apiResponse");

const customerCtrl = {
  create: asyncHandler(async (req, res, next) => {
    const customerDTO = req.body;
    let savedData;
    if (Array.isArray(customerDTO)) {
      savedData = await CustomerService.createMany(customerDTO);
    } else {
      savedData = await CustomerService.create(customerDTO);
    }
    return successResponse({
      res,
      data: savedData,
      msg: "customer created successfully",
    });
  }),

  getAll: asyncHandler(async (req, res, next) => {
    const customerDTO = req.body;
    const { savedData, totalCount } = await CustomerService.getAll(customerDTO);
    return successResponse({
      res,
      data: savedData,
      count: totalCount,
      msg: "All customers",
    });
  }),

  getById: asyncHandler(async (req, res, next) => {
    const docId = req.body;
    const docById = await CustomerService.getById(docId);
    return successResponse({
       res, 
       data: docById,
        msg: "Customer By Id" });
  }),

  update: asyncHandler(async (req, res, next) => {
    const docDTO = req.body;
    const updatedDoc = await CustomerService.update(docDTO);
    return successResponse({
      res,
      data: updatedDoc,
      msg: "Updated customer successfully",
    });
  }),

  delete: asyncHandler(async (req, res, next) => {
    const docId = req.body;
    const deletedDoc = await CustomerService.delete(docId);
    return successResponse({
      res,
      data: deletedDoc,
      msg: "customer Deleted Successfully",
    });
  }),
  signIn: asyncHandler(async (req, res, next) => {
    const { email,password } = req.body;
    const {user,token} = await CustomerService.signIn(email,password);
    return successResponse({
      res,
      data: {user,token},
      msg: " login successful",
    });
  }),
  
};

module.exports = customerCtrl;
