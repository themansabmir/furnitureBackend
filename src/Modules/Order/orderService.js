const DbService = require("../../Service/DbService");
const serviceHandler = require("../../Utils/serviceHandler");
const CustomError = require("../../Errors/CustomError");
const OrderModel = require("./orderModel");

const model = new DbService(OrderModel);

const orderService = {
  create: serviceHandler(async (data) => {
    return await model.save(data);
  }),

  getAll: serviceHandler(async (data) => {
    const query = {};
    const updatedData = {
      ...data,
      populate: {
        path: "products.productId",
      },
      populate: {
        path: "customerId",
      },
    };
    const savedData = await model.getAllDocuments(query, updatedData);
    const totalCount = await model.totalCounts({ isDelete: false });
    return { savedData, totalCount };
  }),
  getById: serviceHandler(async (dataId) => {
    const { orderId } = dataId;
    const query = { isDelete: false, _id: orderId };
    const updatedData = {
      populate: {
        path: "products.productId",
      },
      populate: {
        path: "customerId",
      },
    };
    const savedDataById = await model.getDocumentById(query, updatedData);
    return savedDataById;
  }),
  update: serviceHandler(async (updateData) => {
    const { orderId } = updateData;
    const filter = { _id: orderId };
    const updatePayload = { ...updateData };
    const updatedData = {
      populate: {
        path: "products.productId",
      },
      populate: {
        path: "customerId",
      },
    };
    const updatedDoc = await model.updateDocument(
      filter,
      updatePayload,
      updatedData
    );
    return updatedDoc;
  }),
  delete: serviceHandler(async (deleteId) => {
    const { orderId } = deleteId;
    const deletedDoc = await model.updateDocument(
      { _id: orderId },
      { isDelete: true }
    );
    return deletedDoc;
  }),
};

module.exports = orderService;
