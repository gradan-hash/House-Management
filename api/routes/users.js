import express from "express"

import {CreateUser,updateusers,getAllusers,getusers} from "../controllers/users.js"

const router =express.Router()

router.post("/", CreateUser)
router.put("/:id", updateusers)
router.get("/:id", getusers)
router.get("/", getAllusers)

export default router