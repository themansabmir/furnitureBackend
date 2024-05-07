const { categoryRouter } = require('./Modules/Category/categoryRouter')
const { roleRouter } = require('./Modules/Roles/roleRouter')
const subcategoryRouter = require('./Modules/SubCategory/subcategoryRouter')
const { userAdminRouter } = require('./Modules/User/userRouter')


const adminRouter = require('express').Router()
const userRouter = require('express').Router()

// ADMIN ROUTES
adminRouter.use("/category", categoryRouter)
adminRouter.use("/subcategory" , subcategoryRouter)
adminRouter.use("/userRole" ,roleRouter )
adminRouter.use("/user",userAdminRouter)



// USER ROUTES




module.exports= {adminRouter, userRouter}