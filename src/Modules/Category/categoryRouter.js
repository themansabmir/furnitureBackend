const categoryCtrl = require('./categoryCtrl')

const router = require('express').Router();

router.post("/create" , categoryCtrl.create)
router.post("/getAll" , categoryCtrl.getAll)
router.post("/getCategory" , categoryCtrl.getById)
router.post("/delete" , categoryCtrl.delete)
router.post("/update" , categoryCtrl.update)

const categoryRouter = router

module.exports= {categoryRouter}
