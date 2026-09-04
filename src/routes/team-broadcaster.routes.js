import Route from "express";
import teamBroadcasterController, * as controller from "../controllers/team-broadcaster.controller.js";

const router = Route();

// Create a new Team Broadcaster
router.post("/", teamBroadcasterController.createTeamBroadcaster);

// Get all Team Broadcasters
router.get("/", teamBroadcasterController.getAllTeamBroadcasters);

// Get Team Broadcaster by Id
router.get("/:id", teamBroadcasterController.getTeamBroadcasterById);

// Update Team Broadcaster by Id
router.put("/:id", teamBroadcasterController.updateTeamBroadcasterById);

// Delete Team Broadcaster by Id
router.delete("/:id", teamBroadcasterController.deleteTeamBroadcasterById);

export default router;
