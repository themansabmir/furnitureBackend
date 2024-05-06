const {  validateRequestBody, subcategoryValidationSchema } = require("../../validators/Validation");
const subcategoryCtrl = require("./subcategoryCtrl");

const subcategoryRouter = require("express").Router();

subcategoryRouter.post("/create",subcategoryValidationSchema, validateRequestBody, subcategoryCtrl.create);
subcategoryRouter.post("/getall", subcategoryCtrl.getAll);
subcategoryRouter.post("/getById", subcategoryCtrl.getById);
subcategoryRouter.post("/update", subcategoryCtrl.update);
subcategoryRouter.post("/delete", subcategoryCtrl.delete);
subcategoryRouter.post("/createMany", subcategoryCtrl.create);

module.exports = subcategoryRouter;
