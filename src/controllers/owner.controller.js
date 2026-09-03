import ownerService, * as service from "../services/owner.service.js";
import ApiResponses from "../utils/api-responses.js";

const createOwner = async (req, res) => {
  const owner = await ownerService.createOwner(req.body);

  ApiResponses.created(res, owner, "Owner created successfully");
};

const getAllOwners = async (req, res) => {
  const owners = await ownerService.getAllOwners();

  ApiResponses.success(res, owners, "Owners fetched successfully");
};

const getOwnerById = async (req, res) => {
  const owner = await ownerService.getOwnerById(req.params.id);

  ApiResponses.success(res, owner, "Owner fetched successfully");
};

const updateOwnerById = async (req, res) => {
  const owner = await ownerService.updateOwnerById(req.params.id, req.body);

  ApiResponses.success(res, owner, "Owner updated successfully");
};

const deleteOwnerById = async (req, res) => {
  const owner = await ownerService.deleteOwnerById(req.params.id);

  ApiResponses.success(res, owner, "Owner deleted successfully");
};

export default {
  createOwner,
  getAllOwners,
  getOwnerById,
  updateOwnerById,
  deleteOwnerById,
};
