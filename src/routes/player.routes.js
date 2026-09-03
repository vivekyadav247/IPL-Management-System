import Route from "express";
import playerController, * as controller from "../controllers/player.controller.js";

const router = Route();

// Create a new player
router.post("/", playerController.createPlayer);

// Get all players
router.get("/", playerController.getAllPlayers);

// Get player by Id
router.get("/:id", playerController.getPlayerById);

// Update player by Id
router.put("/:id", playerController.updatePlayerById);

// Delete player by Id
router.delete("/:id", playerController.deletePlayerById);

export default router;
