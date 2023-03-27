import express from "express";
import { getAllEvents, createEvent } from "../controller/events.js";

const router = express.Router();

router.get("/events", getAllEvents);
router.get("/events/createEvent", createEvent);

export default router;