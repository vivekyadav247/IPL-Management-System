import Route from "express";
import teamController, * as controller from "../controllers/team.controller.js";

const router = Route();

// Create a new team
router.post("/", teamController.createTeam);

// Get all teams
router.get("/", teamController.getAllTeams);

// Get team by Id
router.get("/:id", teamController.getTeamById);

// Update team by Id
router.put("/:id", teamController.updateTeamById);

// Delete team by Id
router.delete("/:id", teamController.deleteTeamById);

export default router;
