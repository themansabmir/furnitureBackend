

const productService = require('./ProductService')


const productCtrl = {
  create: asyncHandler(async (req, res, next) => {
    const productDTO = req.body;
    let savedData;
    if (Array.isArray(productDTO)) {
      savedData = await productService.createMany(productDTO);
    } else {
      savedData = await productService.create(productDTO);
    }
    return successResponse({
      res,
      data: savedData,
      msg: "Product created successfully",
    });
  }),

  getAll: asyncHandler(async (req, res, next) => {
    const productDTO = req.body;
    const { savedData, totalCount } = await productService.getAll(
      productDTO
    );
    return successResponse({
      res,
      data: savedData,
      count: totalCount,
      msg: "All subcategories",
    });
  }),

  getById: asyncHandler(async (req, res, next) => {
    const docId = req.body;
    const docById = await productService.getById(docId);
    return successResponse({ res, data: docById, msg: "Subcategory By Id" });
  }),

  update: asyncHandler(async (req, res, next) => {
    const docDTO = req.body;
    const updatedDoc = await productService.update(docDTO);
    return successResponse({
      res,
      data: updatedDoc,
      msg: "Updated Product successfully",
    });
  }),

  delete: asyncHandler(async (req, res, next) => {
    const docId = req.body;
    const deletedDoc = await productService.delete(docId);
    return successResponse({
      res,
      data: deletedDoc,
      msg: "Product Deleted Successfully",
    });
  }),
};


module.exports = productCtrl