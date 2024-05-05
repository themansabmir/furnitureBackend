const { categoryRouter } = require('./Modules/Category/categoryRouter')
const subcategoryRouter = require('./Modules/SubCategory/subcategoryRouter')

const adminRouter = require('express').Router()
const userRouter = require('express').Router()

// ADMIN ROUTES
adminRouter.use("/category", categoryRouter)
adminRouter.use("/subcategory" , subcategoryRouter)



// USER ROUTES




module.exports= {adminRouter, userRouter}