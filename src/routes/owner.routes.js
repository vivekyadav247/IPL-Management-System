import Route from "express";
import ownerController, * as controller from "../controllers/owner.controller.js";

const router = Route();

// Create a new Owner
router.post("/", ownerController.createOwner);

// Get all Owners
router.get("/", ownerController.getAllOwners);

// Get owner by Id
router.get("/:id", ownerController.getOwnerById);

// Update owner by Id
router.put("/:id", ownerController.updateOwnerById);

// Delete owner by Id
router.delete("/:id", ownerController.deleteOwnerById);

export default router;
