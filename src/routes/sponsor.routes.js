import Route from "express";
import sponsorController, * as controller from "../controllers/sponsor.controller.js";

const router = Route();

// Create a new Sponsor
router.post("/", sponsorController.createSponsor);

// Get all Sponsors
router.get("/", sponsorController.getAllSponsors);

// Get sponsor by Id
router.get("/:id", sponsorController.getSponsorById);

// Update sponsor by Id
router.put("/:id", sponsorController.updateSponsorById);

// Delete sponsor by Id
router.delete("/:id", sponsorController.deleteSponsorById);

export default router;
