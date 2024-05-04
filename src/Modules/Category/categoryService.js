const Category = require("./CategoryModel");
const DbService = require("../../Service/DbService");
const serviceHandler = require("../../Utils/serviceHandler");
const CustomError = require("../../Errors/CustomError");
const model = new DbService(Category);

const categoryService = {
  createCategory: serviceHandler(async (dataBody) => {
    if (!dataBody) {
      throw new CustomError(400, "Category not defined");
    }

    const savedData = await model.save(dataBody); // it's a temporary method not  implemented yet.
    return savedData;
  }),
};

const CategoryService = categoryService;

module.exports = CategoryService;
