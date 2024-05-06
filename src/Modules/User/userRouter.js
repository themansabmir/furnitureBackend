const userCtrl = require('./userCtrl')

const router = require('express').Router();

router.post("/create" , userCtrl.create)
router.post("/getAll" , userCtrl.getAll)
router.post("/getCategory" , userCtrl.getById)
router.post("/delete" , userCtrl.delete)
router.post("/update" , userCtrl.update)

const userRouter = router

module.exports= {userRouter}