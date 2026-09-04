import Route from "express";
import broadcasterController, * as controller from "../controllers/broadcaster.controller.js";

const router = Route();

// Create a new Broadcaster
router.post("/", broadcasterController.createBroadcaster);

// Get all Broadcasters
router.get("/", broadcasterController.getAllBroadcasters);

// Get broadcaster by Id
router.get("/:id", broadcasterController.getBroadcasterById);

// Update broadcaster by Id
router.put("/:id", broadcasterController.updateBroadcasterById);

// Delete broadcaster by Id
router.delete("/:id", broadcasterController.deleteBroadcasterById);

export default router;
