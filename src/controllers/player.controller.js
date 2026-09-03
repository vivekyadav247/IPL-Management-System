import ApiResponses from "../utils/api-responses.js";
import playerService, * as service from "../services/player.service.js";

const createPlayer = async (req, res) => {
  const player = await playerService.createPlayer(req.body);
  ApiResponses.created(res, player, "Player created successfully");
};

const getAllPlayers = async (req, res) => {
  const players = await playerService.getAllPlayers();
  ApiResponses.success(res, players, "Players fetched successfully");
};

const getPlayerById = async (req, res) => {
  const player = await playerService.getPlayerById(req.params.id);
  ApiResponses.success(res, player, "Player fetched successfully");
};

const updatePlayerById = async (req, res) => {
  const player = await playerService.updatePlayerById(req.params.id, req.body);
  ApiResponses.success(res, player, "Player updated successfully");
};

const deletePlayerById = async (req, res) => {
  const player = await playerService.deletePlayerById(req.params.id);
  ApiResponses.success(res, player, "Player deleted successfully");
};

export default {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayerById,
  deletePlayerById,
};
