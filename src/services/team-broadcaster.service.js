import ApiError from "../utils/api-error.js";
import TeamBroadcaster from "../models/team-broadcaster.model.js";

const createTeamBroadcaster = async ({ teamId, broadcasterId }) => {
  const teamBroadcaster = await TeamBroadcaster({ teamId, broadcasterId });
  return await teamBroadcaster.save();
};

const getAllTeamBroadcasters = async () => {
  const teamBroadcasters = await TeamBroadcaster.find();
  return teamBroadcasters;
};

const getTeamBroadcasterById = async (id) => {
  const teamBroadcaster = await TeamBroadcaster.findById(id);
  if (!teamBroadcaster) {
    throw new ApiError(404, "Team Broadcaster not found");
  }
  return teamBroadcaster;
};

const updateTeamBroadcasterById = async (id, { teamId, broadcasterId }) => {
  const teamBroadcaster = await TeamBroadcaster.findByIdAndUpdate(
    id,
    { teamId, broadcasterId },
    { new: true, runValidators: true },
  );
  if (!teamBroadcaster) {
    throw new ApiError(404, "Team Broadcaster not found");
  }
  return teamBroadcaster;
};

const deleteTeamBroadcasterById = async (id) => {
  const teamBroadcaster = await TeamBroadcaster.findByIdAndDelete(id);
  if (!teamBroadcaster) {
    throw new ApiError(404, "Team Broadcaster not found");
  }
  return teamBroadcaster;
};

export default {
  createTeamBroadcaster,
  getAllTeamBroadcasters,
  getTeamBroadcasterById,
  updateTeamBroadcasterById,
  deleteTeamBroadcasterById,
};
