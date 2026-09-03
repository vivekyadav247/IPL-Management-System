import ApiError from "../utils/api-error.js";
import Team from "../models/team.model.js";

const createTeam = async ({ name, ownerId }) => {
  const team = await Team({ name, ownerId });
  return await team.save();
};

const getAllTeams = async () => {
  const teams = await Team.find();
  return teams;
};

const getTeamById = async (id) => {
  const team = await Team.findById(id);

  if (!team) {
    throw new ApiError(404, "Team not found");
  }

  return team;
};

const updateTeamById = async (id, { name, ownerId }) => {
  const team = await Team.findByIdAndUpdate(
    id,
    { name, ownerId },
    { new: true, runValidators: true },
  );

  if (!team) {
    throw new ApiError(404, "Team not found");
  }

  return team;
};

const deleteTeamById = async (id) => {
  const team = await Team.findByIdAndDelete(id);
  if (!team) {
    throw new ApiError(404, "Team not found");
  }
  return team;
};

export default {
  createTeam,
  getAllTeams,
  getTeamById,
  updateTeamById,
  deleteTeamById,
};
