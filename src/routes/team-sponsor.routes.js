import Route from "express";
import teamSponserController, * as controller from "../controllers/team-sponsor.controller.js";

const router = Route();

// Create a new Team Sponsor
router.post("/", teamSponserController.createTeamSponser);

// Get all Team Sponsors
router.get("/", teamSponserController.getAllTeamSponsors);

// Get Team Sponsor by Id
router.get("/:id", teamSponserController.getTeamSponserById);

// Update Team Sponsor by Id
router.put("/:id", teamSponserController.updateTeamSponserById);

// Delete Team Sponsor by Id
router.delete("/:id", teamSponserController.deleteTeamSponserById);

export default router;
