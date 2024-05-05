const subcategoryCtrl = require("./subcategoryCtrl");

const subcategoryRouter = require("express").Router();

subcategoryRouter.post("/create", subcategoryCtrl.create);
subcategoryRouter.post("/getall", subcategoryCtrl.getAll);
subcategoryRouter.post("/getById", subcategoryCtrl.getById);
subcategoryRouter.post("/update", subcategoryCtrl.update);
subcategoryRouter.post("/delete", subcategoryCtrl.delete);

module.exports = subcategoryRouter;
