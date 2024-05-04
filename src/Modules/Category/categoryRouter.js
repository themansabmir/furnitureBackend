const categoryCtrl = require('./categoryCtrl')

const router = require('express').Router();

router.post("/create" , categoryCtrl.create)
router.post("/getAll" , categoryCtrl.getAll)
// categoryRouter.post("/create" , categoryCtrl.getById)
// categoryRouter.post("/create" , categoryCtrl.update)
// categoryRouter.post("/create", categoryCtrl.delete)

const categoryRouter = router

module.exports= {categoryRouter}
