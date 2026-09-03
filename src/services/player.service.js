import ApiError from "../utils/api-error.js";
import Player from "../models/player.model.js";

const createPlayer = async ({ name, role, teamId }) => {
  const player = await Player({ name, role, teamId });
  return await player.save();
};

const getAllPlayers = async () => {
  const players = await Player.find().populate("teamId");
  return players;
};

const getPlayerById = async (id) => {
  const player = await Player.findById(id).populate("teamId");
  if (!player) {
    throw new ApiError(404, "Player not found");
  }
  return player;
};

const updatePlayerById = async (id, { name, role, teamId }) => {
  const player = await Player.findByIdAndUpdate(
    id,
    { name, role, teamId },
    { new: true, runValidators: true },
  );

  if (!player) {
    throw new ApiError(404, "Player not found");
  }

  return player;
};

const deletePlayerById = async (id) => {
  const player = await Player.findByIdAndDelete(id);
  if (!player) {
    throw new ApiError(404, "Player not found");
  }
  return player;
};

export default {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayerById,
  deletePlayerById,
};
