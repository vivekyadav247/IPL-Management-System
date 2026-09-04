import ApiError from "../utils/api-error.js";
import Broadcaster from "../models/broadcaster.model.js";

const createBroadcaster = async ({ name, company }) => {
  const broadcaster = await Broadcaster({ name, company });
  return await broadcaster.save();
};

const getAllBroadcasters = async () => {
  const broadcasters = await Broadcaster.find();
  return broadcasters;
};

const getBroadcasterById = async (id) => {
  const broadcaster = await Broadcaster.findById(id);

  if (!broadcaster) {
    throw new ApiError(404, "Broadcaster not found");
  }

  return broadcaster;
};

const updateBroadcasterById = async (id, { name, company }) => {
  const broadcaster = await Broadcaster.findByIdAndUpdate(
    id,
    { name, company },
    { new: true, runValidators: true },
  );

  if (!broadcaster) {
    throw new ApiError(404, "Broadcaster not found");
  }

  return broadcaster;
};

const deleteBroadcasterById = async (id) => {
  const broadcaster = await Broadcaster.findByIdAndDelete(id);

  if (!broadcaster) {
    throw new ApiError(404, "Broadcaster not found");
  }

  return broadcaster;
};

export default {
  createBroadcaster,
  getAllBroadcasters,
  getBroadcasterById,
  updateBroadcasterById,
  deleteBroadcasterById,
};
