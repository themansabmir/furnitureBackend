const Subcategory = require("./subcategoryModel");
const DbService = require("../../Service/DbService");

const model = new DbService(Subcategory);

const subcategoryService = {
  create: async (data) => {
    return await model.save(data);
    },

    getAll: async (data) => {

    }
};
