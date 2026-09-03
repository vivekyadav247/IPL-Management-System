import ApiError from "../utils/api-error.js";
import Owner from "../models/owner.model.js";

const createOwner = async ({ name, company }) => {
  const owner = await Owner({ name, company });
  return await owner.save();
};

const getAllOwners = async () => {
  const owners = await Owner.find();
  return owners;
};

const getOwnerById = async (id) => {
  const owner = await Owner.findById(id);

  if (!owner) {
    throw new ApiError(404, "Owner not found");
  }

  return owner;
};

const updateOwnerById = async (id, { name, company }) => {
  const owner = await Owner.findByIdAndUpdate(
    id,
    { name, company },
    { new: true, runValidators: true },
  );

  if (!owner) {
    throw new ApiError(404, "Owner not found");
  }

  return owner;
};

const deleteOwnerById = async (id) => {
  const owner = await Owner.findByIdAndDelete(id);

  if (!owner) {
    throw new ApiError(404, "Owner not found");
  }

  return owner;
};

export default {
  createOwner,
  getAllOwners,
  getOwnerById,
  updateOwnerById,
  deleteOwnerById,
};
