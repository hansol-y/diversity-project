import express from "express";
import { getAllEvents } from "../controller/events.js";

const router = express.Router();

router.get("/events", getAllEvents);

export default router;