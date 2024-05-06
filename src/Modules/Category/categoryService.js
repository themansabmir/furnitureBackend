const Category = require("./CategoryModel");
const DbService = require("../../Service/DbService");
const serviceHandler = require("../../Utils/serviceHandler");
const CustomError = require("../../Errors/CustomError");
const model = new DbService(Category);

const categoryService = {
  create: serviceHandler(async (data) => {
    return await model.save(data);
  }),

  getAll: serviceHandler(async (data) => {
    const query = { isDelete: false };
    const savedData = await model.getAllDocuments(query, data);
    const totalCount = await model.totalCounts({ isDelete: false });
    return { savedData, totalCount };
  }),
  getById: serviceHandler(async (dataId) => {
    const { categoryId } = dataId;
    const query = { isDelete: false, _id: categoryId };
    const savedDataById = await model.getDocumentById(query);
    return savedDataById;
  }),
  update: serviceHandler(async (updateData) => {
    const { categoryId } = updateData;
    const filter = { _id: categoryId };
    const updatePayload = { ...updateData };
    const updatedDoc = await model.updateDocument(filter, updatePayload);
    return updatedDoc;
  }),
  delete: serviceHandler(async (deleteId) => {
    const { subcategoryId } = deleteId;
    const deletedDoc = await model.updateDocument(
      { _id: subcategoryId },
      { isDelete: true }
    );
    return deletedDoc;
  }),
};

const CategoryService = categoryService;

module.exports = CategoryService;
