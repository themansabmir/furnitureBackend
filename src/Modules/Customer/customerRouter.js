const customerCtrl = require('./customerCtrl')

const router = require('express').Router();

router.post("/create" , customerCtrl.create)
router.post("/getAll" , customerCtrl.getAll)
router.post("/getCustomer" , customerCtrl.getById)
router.post("/delete" , customerCtrl.delete)
router.post("/update" , customerCtrl.update)
router.post("/sigIn" , customerCtrl.signIn)

const customerRouter = router

module.exports= {customerRouter}