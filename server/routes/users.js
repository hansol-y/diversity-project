import express from "express";
import {
    getUser,
    addUser,
    getUserEvents,
} from "../controller/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/events", verifyToken, getUserEvents);

/* UPDATE */
router.patch("/:id/:new", verifyToken, addUser);

export default router;