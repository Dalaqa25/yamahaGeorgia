import express from "express";
import {
    getAllAccessories,
    createAccessory,
    getAccessoryById,
    updateAccessory,
    deleteAccessory
} from "../controllers/accessoryController.js";

const router = express.Router();

router.get("/", getAllAccessories);
router.post("/", createAccessory);
router.get("/:id", getAccessoryById);
router.put("/:id", updateAccessory);
router.delete("/:id", deleteAccessory);

export default router;