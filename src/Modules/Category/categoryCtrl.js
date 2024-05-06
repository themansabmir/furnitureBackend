const CustomError = require("../../Errors/CustomError");
const successResponse = require("../../Utils/apiResponse");
const asyncHandler = require("../../Utils/asyncHandler");
const CategoryService = require("./categoryService");

const categoryCtrl = {
  create: asyncHandler(async (req, res, next) => {
    const categoryDTO = req.body;

    const savedCategory = await CategoryService.create(categoryDTO);

    return successResponse({
      res: res,
      data: savedCategory,
      msg: "Category created Successfully",
    });
  }),
  getAll: asyncHandler(async (req, res, next) => {
    const categoryDTO = req.body;
    const { savedData, totalCount } = await CategoryService.getAll(
      categoryDTO
    );
    return successResponse({
      res,
      data: savedData,
      count: totalCount,
      msg: "All subcategories",
    });
  }),

  getById: async (req, res, next) => {
    try {
      const { id } = req.body;

      if (!id) {
        throw new CustomError(400, "Category ID not provided");
      }

      const category = await CategoryService.getById({ _id: id });

      if (!category) {
        throw new CustomError(404, "Category not found");
      }

      return successResponse({
        res: res,
        data: category,
        msg: "Retrieved category successfully",
      });
    } catch (error) {
      next(error);
    }
  },
  update: asyncHandler(async (req, res, next) => {
    const docDTO = req.body;
    const updatedDoc = await CategoryService.update(docDTO);
    return successResponse({
      res,
      data: updatedDoc,
      msg: "Updated Category successfully",
    });
  }),

  delete: asyncHandler(async (req, res, next) => {
    const docId = req.body;
    const deletedDoc = await CategoryService.delete(docId);
    return successResponse({
      res,
      data: deletedDoc,
      msg: "category Deleted Successfully",
    });
  })
};

module.exports = categoryCtrl;
