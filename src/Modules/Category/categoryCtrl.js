const CustomError = require("../../Errors/CustomError");
const successResponse = require("../../Utils/apiResponse");
const asyncHandler = require("../../Utils/asyncHandler");
const CategoryService = require("./categoryService");

const categoryCtrl = {
  create: asyncHandler(async (req, res, next) => {
    const categoryDTO = req.body;

    const savedCategory = await CategoryService.createCategory(categoryDTO);

    return successResponse({
      res: res,
      data: savedCategory,
      msg: "Category created Successfully",
    });
  }),
  getAll: async (req, res, next) => {






  },
  getById: async (req, res, next) => {



  },
  delete: async (req, res, next) => {
    const categoryDTO = req.body

    const deletedCategory  = await CategoryService.delete(categoryDTO) 
  },
  update: async (req, res, next) => {},
};

module.exports = categoryCtrl;
