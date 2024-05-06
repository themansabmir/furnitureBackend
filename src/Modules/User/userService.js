const User = require("./userModel");
const DbService = require("../../Service/DbService");
const serviceHandler = require("../../Utils/serviceHandler");
const CustomError = require("../../Errors/CustomError");

const model = new DbService(User);

const userService = {
  create: serviceHandler(async (data) => {
      return await model.save(data);
  }),

  createMany: serviceHandler(async (data) => {
  
  }),

  getAll: serviceHandler(async (data) => {
   
  }),
  getById: serviceHandler(async (dataId) => {
   
  }),
  update: serviceHandler(async (updateData) => {
   
  }),
  delete: serviceHandler(async (deleteId) => {
   
  }),
};

module.exports = subcategoryService;
