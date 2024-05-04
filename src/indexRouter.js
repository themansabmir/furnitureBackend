const { categoryRouter } = require('./Modules/Category/categoryRouter')

const adminRouter = require('express').Router()
const userRouter = require('express').Router()

// ADMIN ROUTES
adminRouter.use("/category",categoryRouter )



// USER ROUTES

// userRouter.use()



module.exports= {adminRouter, userRouter}